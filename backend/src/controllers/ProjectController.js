const connection = require('../database/connection')
const encrypt = require('../utils/encryptPassword')

module.exports = {
    async create (request, response) {
        const { email, password } = response.user
        try {
            const ong = await connection('ong').where({ email, password })
            if (!ong[0]) return response.status(202).json({ message: "Sem autorização." })
            const { id } = ong[0]
            const { name, type, address, segment, description, date_start, date_end } = request.body
            await connection('project').insert({ ong_id: id, name, type, address, segment, description, date_start, date_end })
            return response.status(200).json({ message: "Projeto criado." })
        } catch (error) {
            return console.log(error)
        }
    },

    async index (request, response) {
        const { name = '', uf = '', types = [], segments = [] } = request.body
        const { page = 1, size = 10 } = request.query
        
        if (name || uf || types[0] || segments[0]) {
            const segment = segments.join(',')
            const [count] = await connection('project')
                .count('project.id as total')
                .leftJoin('ong', 'project.ong_id', 'ong.id')
                .where((builder) => {
                    builder.where('project.active', true)
                    if (name) { builder.where('project.name', 'like', `%${name}%`) }
                    if (uf) { builder.where('ong.uf', uf) }
                    if (types[0]) { builder.whereIn('project.type', types) }
                    if (segments[0]) { builder.where('project.segment', 'like', `%${segment}%`)}
                })
            const projetos = await connection('project')
            .select('project.id as id','project.name as nome', 'project.segment as segmentos', 'project.type as tipo', 'project.description as descricao')
            .leftJoin('ong', 'project.ong_id', 'ong.id')
            .limit(size)
            .offset((page - 1) * size)
            .where((builder) => {
                builder.where('project.active', true)
                if (name) { builder.where('project.name', 'like', `%${name}%`) }
                if (uf) { builder.where('ong.uf', uf) }
                if (types[0]) { builder.whereIn('project.type', types) }
                if (segments[0]) { builder.where('project.segment', 'like', `%${segment}%`)}
            })
            return response.status(200).json({lista: projetos, total: count['total']})
        }
        const [count] = await connection('project').count('id as total').where('active', true)
        const projetos = await connection('project')
            .select('id','name as nome', 'segment as segmentos', 'type as tipo', 'description as descricao')
            .limit(size)
            .offset((page - 1) * size)
            .where('active', true)
        return response.status(200).json({lista: projetos, total: count['total']})
    },

    async get (request, response) {
        const { email, password } = response.user
        const projetosEmAndamento = request.headers['x-andamento']
        const ong = await connection('ong').where({ email, password })
        const { id } = ong[0]
        if (projetosEmAndamento) {
            const data = await connection('project').where({ ong_id: id, active: true })
            return response.status(200).json(data)
        } else {
            const data = await connection('project').where({ ong_id: id, active: false })
            return response.status(200).json(data)
        }
    },

    async details (request, response) {
        const { id } = request.params
        const data = await connection('project')
            .select('project.name as nome', 'project.address as endereco', 'project.segment as segmentos', 'project.type as tipo', 'project.description as descricao', 'ong.name as ong', 'ong.url as site', 'ong.email as email', 'ong.phone as celular', 'ong.city as cidade', 'ong.uf as uf')
            .where('project.id', id)
            .leftJoin('ong', 'project.ong_id', 'ong.id')
        return response.status(200).json(data[0])
    },

    async delete (request, response) {
        const id = request.headers['x-project-id']
        await connection('project').where('id', id).del()
        return response.status(200).json({ message: "Projeto excluído." })
    }
}
const connection = require('../database/connection')
const encrypt = require('../utils/encryptPassword')

module.exports = {
    async create(request, response) {
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

    async get(request, response) {
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

    async delete(request, response) {
        const id = request.headers['x-project-id']
        await connection('project').where('id', id).del()
        return response.status(200).json({ message: "Projeto excluído." })
    }
}
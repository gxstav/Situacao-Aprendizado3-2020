const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { email, password } = response.user
        try {
            const ong = await connection('ong').where({ email, password })
            if (!ong[0]) return response.sendStatus(401).json({ message: "Sem autorização." })
            const { id } = ong[0]
            const { name, type, address, segment, description, date_start, date_end } = request.body
            await connection('project').insert({ ong_id: id, name, type, address, segment, description, date_start, date_end })
            return response.status(200).json({ message: "Projeto Criado." })
        } catch (error) {
            return console.log(error)
        }
    },

    async get(request, response) {
        const { id } = request.params
        // const result = await connection('incident').where('id', id)
    }
}
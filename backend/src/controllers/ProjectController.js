const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { name, type, address, segment, description, date_start, date_end } = request.body
        await connection('project').insert({ name, type, address, segment, description, date_start, date_end })
            .catch(e => console.log(e))
        return response.status(200).json(request.body)
    },

    async get(request, response) {
        const { id } = request.params
        // const result = await connection('incident').where('id', id)
    }
}
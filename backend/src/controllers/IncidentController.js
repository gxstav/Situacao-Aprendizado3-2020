const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { name, type, address, date_start, date_end, segment, image, description } = request.body
        // await connection('ong').insert({ name, email, password: encrypt(password), phone, city, uf, url, about })
        //     .catch(e => console.log(e))
        return response.status(200).json(request.body)
    },

    async get(request, response) {
        const { id } = request.params
        // const result = await connection('incident').where('id', id)
    }
}
const connection = require('../database/connection')
const encrypt = require('../utils/encryptPassword')

module.exports = {
    async create(request, response) {
        const { name, email, password, phone, city, uf, url, about } = request.body
        await connection('ong').insert({ name, email, password: encrypt(password), phone, city, uf, url, about })
            .catch(e => console.log(e))
        return response.status(200).json({ message: "ONG Cadastrada." })
    }
}
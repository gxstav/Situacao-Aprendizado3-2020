const connection = require('../database/connection')

module.exports = {
  async create(request, response) {
    const { name, email, password, phone, city, uf, url, about } = request.body
    await connection('ong').insert({ name, email, password, phone, city, uf, url, about })
    .catch(e => console.log(e))
    return response.json({ status: 200, message: "ONG Created." })
  }
}
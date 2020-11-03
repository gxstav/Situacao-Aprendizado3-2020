const connection = require('../database/connection')

module.exports = {
  async get(request, response) {
    const { id } = request.params
    // const result = await connection('incident').where('id', id)
  }
}
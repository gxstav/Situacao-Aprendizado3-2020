let knex = require('knex')

module.exports = {
  up: async function(knex) {
    return knex.schema.createTable('token', table => {
      table.increments('id').primary()
      table.string('refresh').notNullable()
    })
  },
  
  down: async function(knex) {
    return knex.schema.dropTable('token')
  }
}
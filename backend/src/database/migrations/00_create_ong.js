let knex = require('knex')

module.exports = {
  up: async function(knex) {
    return knex.schema.createTable('ong', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
    })
  },
  
  down: async function(knex) {
    return knex.schema.dropTable('ong')
  }
}
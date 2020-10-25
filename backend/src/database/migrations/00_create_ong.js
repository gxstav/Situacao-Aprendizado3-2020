let knex = require('knex')

module.exports = {
  up: async function(knex) {
    return knex.schema.createTable('ong', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('password').notNullable()
      table.string('phone').notNullable()
      table.string('city').notNullable()
      table.string('uf', 2).notNullable()
      table.string('url')
      table.text('about').notNullable()
    })
  },
  
  down: async function(knex) {
    return knex.schema.dropTable('ong')
  }
}
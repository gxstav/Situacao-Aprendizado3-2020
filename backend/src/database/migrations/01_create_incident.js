let knex = require('knex')

module.exports = {
  up: async function(knex) {
    return knex.schema.createTable('incident', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('type').notNullable()
      table.string('address').notNullable()
      table.string('date_start').notNullable()
      table.string('date_end').notNullable()
      table.string('segment').notNullable()
      table.binary('image').notNullable()
      table.text('description').notNullable()
    })
  },
  
  down: async function(knex) {
    return knex.schema.dropTable('incident')
  }
}
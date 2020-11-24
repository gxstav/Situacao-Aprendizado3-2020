let knex = require('knex')

module.exports = {
  up: async function(knex) {
    return knex.schema.createTable('project', table => {
      table.increments('id').primary()
      table.boolean('active').defaultTo(true).notNullable()
      table.string('name').notNullable()
      table.string('type').notNullable()
      table.string('address').notNullable()
      table.string('segment').notNullable()
      table.text('description').notNullable()
      table.timestamp('date_start').notNullable()
      table.timestamp('date_end').notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  },
  
  down: async function(knex) {
    return knex.schema.dropTable('project')
  }
}
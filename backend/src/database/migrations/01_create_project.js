const knex = require('knex')
const moment = require('moment')
const NOW = () => moment().format()
module.exports = {
  up: async function(knex) {
    return knex.schema.createTable('project', table => {
      table.increments('id').primary()
      table.integer('ong_id').unsigned()
      table.foreign('ong_id').references('id').inTable('ong')
      table.boolean('active').defaultTo(true).notNullable()
      table.string('name').notNullable()
      table.string('type').notNullable()
      table.string('address').notNullable()
      table.string('segment').notNullable()
      table.text('description').notNullable()
      table.timestamp('date_start').notNullable()
      table.timestamp('date_end').notNullable()
      table.timestamp('created_at').defaultTo(NOW())
      table.timestamp('updated_at').defaultTo(NOW())
    })
  },
  
  down: async function(knex) {
    return knex.schema.dropTable('project')
  }
}
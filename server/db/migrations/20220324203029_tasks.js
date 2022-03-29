exports.up = function (knex) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary()
    table.string('details')
    table.integer('user_id').references('users.id')
    table.integer('type_id').references('types.id')
    table.string('priority')
    table.boolean('completed')
    table.timestamp('createdAt').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('tasks')
}

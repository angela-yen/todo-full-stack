exports.up = function (knex) {
  return knex.schema.createTable('Tasks', (table) => {
    table.increments().primary()
    table.string('task')
    table.string('catagory')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Tasks')
}

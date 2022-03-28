exports.up = function (knex) {
  return knex.schema.createTable('Type', (table) => {
    table.increments().primary()
    table.string('type')
    table.string('catagory')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('type')
}

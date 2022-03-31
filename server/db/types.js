const config = require('./knexfile').development
const database = require('knex')(config)
// Types

function createType(type, db = database) {
  const newType = {
    type,
  }
  return db('types').insert(newType).select()
}

module.exports = { createType }

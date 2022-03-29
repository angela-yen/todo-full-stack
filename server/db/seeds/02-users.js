exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'Ange' },
        { id: 2, name: 'Sam' },
        { id: 3, name: 'Sophie' },
      ])
    })
}

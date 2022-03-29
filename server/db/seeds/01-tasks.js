exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          details: 'shop for tomatos',
          user_id: 1,
          type_id: 1,
          priority: 'medium',
          completed: false,
        },
        {
          id: 2,
          details: 'do laundry',
          user_id: 1,
          type_id: 2,
          priority: 'high',
          completed: false,
        },
        {
          id: 3,
          details: 'go for a run',
          user_id: 1,
          type_id: 3,
          priority: 'high',
          completed: false,
        },
      ])
    })
}

const config = require('./knexfile').development
const database = require('knex')(config)

// Tasks

function getAllTasks(db = database) {
  return db('tasks').select()
}

function getTasksById(id, db = database) {
  return db('tasks').where('id', id).select()
}

function addTask(task, db = database) {
  const { details, typeId, userId, priority, completed } = task
  const newTask = {
    details,
    type_id: typeId,
    user_id: userId,
    priority,
    completed,
  }
  return db('tasks').insert(newTask).select()
}

// Types

// Users

module.exports = {
  getAllTasks,
  getTasksById,
  addTask,
}

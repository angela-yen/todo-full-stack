const config = require('./knexfile').development
const database = require('knex')(config)

// CRUD
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

function updateTask(task, db = database) {
  const { id, details, typeId, priority, completed } = task
  const updatedTask = {
    details,
    type_id: typeId,
    priority,
    completed,
  }
  return db('tasks').where('id', id).update(updatedTask)
}

function deleteTask(id, db = database) {
  return db('tasks').where('id', id).del()
}

// Types

// function createType(type, db = database) {
//   const newType = {
//     type,
//   }
//   return db('types').insert(newType).select()
// }

// Users

module.exports = {
  getAllTasks,
  getTasksById,
  addTask,
  updateTask,
  deleteTask,
}

const express = require('express')
const db = require('../db/tasks')

const router = express.Router()
module.exports = router

// CRUD

// POST route for /api/v1/tasks
router.post('/', (req, res) => {
  db.addTask(req.body)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

// GET route for /api/v1/tasks
router.get('/', (req, res) => {
  db.getAllTasks()
    .then((tasks) => {
      res.json(tasks)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// PATCH route for /api/v1/tasks
router.patch('/:id', (req, res) => {
  const { id, updatedTask } = req.body
  db.updateTask(id, updatedTask)
    .then((tasks) => {
      res.json(tasks)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// DELETE route for /api/v1/tasks
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteTask(id)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

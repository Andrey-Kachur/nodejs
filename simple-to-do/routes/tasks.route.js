const { Router } = require('express')
const router = Router()

const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks.controller')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router
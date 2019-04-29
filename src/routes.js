const express = require('express')

const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

routes.post('/sessions', SessionController.store)
routes.post('/users', UserController.store)

module.exports = routes

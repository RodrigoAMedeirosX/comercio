const { Router } = require('express')

const UserController = require('../Controllers/UserController')

const routes = Router()

routes.post('/user', UserController.create)


module.exports = routes
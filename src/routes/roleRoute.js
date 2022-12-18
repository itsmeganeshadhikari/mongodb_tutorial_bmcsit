const express = require('express')
<<<<<<< HEAD
const { getRole, create } = require('../controller/roleController')


const roleRouter = express.Router()

roleRouter.get('/getRole', getRole)

roleRouter.post('/create',create)
module.exports = roleRouter
=======
const { getAllRole, create } = require('../controller/roleController')

const roleRoute = express.Router()

roleRoute.get('/getRole',getAllRole)
roleRoute.post('/create',create)

module.exports = roleRoute
>>>>>>> 5cb374518564d83343595a845f3690db230eeab8

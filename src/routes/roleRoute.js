const express = require('express')
const { getRole, create } = require('../controller/roleController')


const roleRouter = express.Router()

roleRouter.get('/getRole', getRole)

roleRouter.post('/create',create)
module.exports = roleRouter
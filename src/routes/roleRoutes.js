const express = require('express')
const { getAllRole, create } = require('../controller/roleController')

const roleRoute = express.Router()

roleRoute.get('/getRole',getAllRole)
roleRoute.post('/create',create)

module.exports = roleRoute
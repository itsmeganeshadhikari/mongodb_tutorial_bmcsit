const express = require('express')
const { getAllRoles, create } = require('../controller/roleController')

const roleRoute = express.Router()

roleRoute.get('/getRole', getAllRoles)
roleRoute.post('/create', create)

module.exports = roleRoute
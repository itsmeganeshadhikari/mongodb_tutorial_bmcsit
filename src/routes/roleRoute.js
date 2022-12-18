const express = require('express')
const { getAllRole, create } = require('../controller/roleController')


const roleRoute = express.Router()

roleRoute.get('/getAllRole', getAllRole)

roleRoute.post('/create',create)
module.exports = roleRoute

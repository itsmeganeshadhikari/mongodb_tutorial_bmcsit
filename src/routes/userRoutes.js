const express = require('express')


const {create} = require('../controller/userController')

const route = express.Router()

route.post('/create',create)
module.exports = route
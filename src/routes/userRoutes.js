const express = require('express')
const { models } = require('mongoose')
const { create, getAllUser } = require('../controller/userController')

const route = express.Router()

route.get('/getUser', getAllUser)
route.post('/create', create)

module.exports = route
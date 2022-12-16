const express = require('express')
const { create, getAllUser } = require('../controller/userController')

const userRoute = express.Router()

userRoute.get('/getUser',getAllUser)
userRoute.post('/create',create)

module.exports = userRoute
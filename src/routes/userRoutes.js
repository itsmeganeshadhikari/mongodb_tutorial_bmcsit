const express = require('express')
const { create } = require('../controller/userController')

const userRoute = express.Router()

userRoute.post('/create',create)

module.exports = userRoute
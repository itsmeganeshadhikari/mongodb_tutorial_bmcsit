const express = require('express')
const { create, getAllUser, update } = require('../controller/userController')

const userRoute = express.Router()

userRoute.get('/getUser',getAllUser)
userRoute.post('/create',create)
userRoute.put('/update/:id',update)

module.exports = userRoute
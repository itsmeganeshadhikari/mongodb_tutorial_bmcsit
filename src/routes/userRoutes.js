const express = require('express')
const { create, getAllUser, update, deleteUser } = require('../controller/userController')

const userRoute = express.Router()

userRoute.get('/getUser',getAllUser)
userRoute.post('/create',create)
userRoute.put('/update/:id',update)
userRoute.delete('/delete/:id',deleteUser)

module.exports = userRoute
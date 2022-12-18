const express = require('express')


const {create, getUser} = require('../controller/userController')

const userRouter = express.Router()

userRouter.get('/getUser', getUser)

userRouter.post('/create',create)
module.exports = userRouter
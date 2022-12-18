const express = require('express')
<<<<<<< HEAD


const {create, getUser} = require('../controller/userController')

const userRouter = express.Router()

userRouter.get('/getUser', getUser)

userRouter.post('/create',create)
module.exports = userRouter
=======
const { create, getAllUser } = require('../controller/userController')

const userRoute = express.Router()

userRoute.get('/getUser',getAllUser)
userRoute.post('/create',create)

module.exports = userRoute
>>>>>>> 5cb374518564d83343595a845f3690db230eeab8

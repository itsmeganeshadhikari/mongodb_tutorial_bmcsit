const express = require('express')
const { models } = require('mongoose')
const { create, getAllUser, update, deleteUser } = require('../controller/userController')

const route = express.Router()

route.get('/getUser', getAllUser)
route.post('/create', create)
route.put('/update/:id', update)
route.delete('/delete/:id', deleteUser)


module.exports = route
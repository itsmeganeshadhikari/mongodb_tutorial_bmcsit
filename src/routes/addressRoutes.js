const express = require('express')
const { create, update, getAllAddress } = require('../controller/addressController')

const addressRoute = express.Router()

addressRoute.post('/create',create)
addressRoute.get('/getAlladdress',getAllAddress)
addressRoute.put('/update',update)
module.exports = addressRoute
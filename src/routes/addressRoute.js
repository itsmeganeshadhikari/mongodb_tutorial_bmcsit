const express = require('express')
const { create } = require('../controller/addressController')

const addressRoute = express.Router()

addressRoute.post('/create',create)
// addressRoute.get('/getAddress',getAddress)

module.exports = addressRoute
const express = require('express')

const productRoute = express.Router()

productRoute.post('/create',create)

module.exports = productRoute
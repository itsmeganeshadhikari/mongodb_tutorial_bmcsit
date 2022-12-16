const express = require('express')
const { create } = require('../controller/productController')

const productRoute = express.Router()

productRoute.post('/create',create)

module.exports = productRoute
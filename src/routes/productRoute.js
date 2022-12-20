const express = require('express')
const { create, getAllProduct } = require('../controller/productController')

const productRoute = express.Router()

productRoute.post('/create',create)
productRoute.get('/getAllProduct',getAllProduct)

module.exports = productRoute
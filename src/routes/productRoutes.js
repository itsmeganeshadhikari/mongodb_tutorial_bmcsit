const express = require('express')
const { models } = require('mongoose')
const { create, getAllProduct } = require('../controller/productController')

const productRoute = express.Router()

productRoute.get('/getProduct', getAllProduct)
productRoute.post('/create', create)

module.exports = productRoute
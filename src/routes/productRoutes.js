const express = require('express')
const { models } = require('mongoose')
const { create, getAllProduct, updateProduct, deleteProduct } = require('../controller/productController')

const productRoute = express.Router()

productRoute.get('/getProduct', getAllProduct)
productRoute.post('/create', create)
productRoute.put('/updateProduct/:id', updateProduct)
productRoute.delete('/deleteProduct/:id', deleteProduct)


module.exports = productRoute
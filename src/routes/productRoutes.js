const express = require('express')
const { create, getAllProduct, update, deleteProduct } = require('../controller/productController')

const productRoute = express.Router()

productRoute.post('/create',create)
productRoute.get('/getAllProduct',getAllProduct)
productRoute.put('/update',update)
productRoute.delete('/delete/:id',deleteProduct)
module.exports = productRoute
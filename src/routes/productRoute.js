const express = require('express')
const { create, getAllProduct , updateProduct,deleteProduct, update } = require('../controller/productController')

const productRoute = express.Router()

productRoute.post('/create',create)
productRoute.get('/getProducts',getAllProduct)
productRoute.put('/updateProducts/:id', updateProduct)
productRoute.delete('/deleteProducts/:id', deleteProduct)

module.exports = productRoute
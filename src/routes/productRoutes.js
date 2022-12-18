const express = require('express')


const {create, getAllProduct} = require('../controller/productcontroller')

const productRoute = express.Router()

productRoute.post('/create',create)
productRoute.get('/getProducts',getAllProduct)


module.exports = productRoute
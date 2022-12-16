const Product = require("../models/Product")
const product = require("../models/User")

exports.create = (req, res) =>{
    const newProduct = new Product(req.body)
    newProduct.save()
    res.status(200).send()

}
const { response } = require("express")
const Product = require("../models/Product")

exports.create = (req, res) => {
    console.log(req.body);

    try {
        const products = new Product(req.body)
        const dataSave = products.save()
        res.send({ user: products })
        response.status(200).send({ user: products })

    }
    catch (e) {
        response.status(500).send({ message: "Error" })

    }
}

exports.getAllProduct = async (req, res) => {
    let productData = await Product.find()
    res.status(200).send({ data: productData })
}
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


exports.updateProduct = async (req, res) => {
    // console.log(req.body)
    // console.log(req.params.id)
    try {
        const id = req.params.id;
        console.log(id)
        const productToUpdate = await Product.findById({ _id: id })
        console.log(productToUpdate)
        if (!productToUpdate) {
            res.send({ message: "Product does not exist" });

        }
        const updatedProduct = await Product.findOneAndUpdate(
            { _id: id },
            { $set: { name: req.body.name } },
            { new: true }
        );
        if (updatedProduct) {
            res.send({ message: "Updated True", updatedProduct });

        } else {
            res.send({ message: "Updated false" });

        }

        res.status(200).send(updatedProduct);
    } catch (e) {
        res.status(500).send(e.message);
    }

}

exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const productToDelete = await Product.findById({ _id: id });
        if (!productToDelete) {
            res.send({ message: "Product does not exist" });
        }
        productToDelete.deleteOne()
        res.status(200).send({ productToDelete })
    } catch (e) {
        res.status(500).send(e.message)

    }
}
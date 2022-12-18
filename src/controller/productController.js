const Product = require("../models/Product")

exports.create=(req, res)=>{
    const products =  new Product(req.body)
    products.save()
    res.status(200).send({message:"Data save successfully",product:products})
}

exports.getAllProduct = async(req, res)=>{
    const allProduct= await Product.find()
    res.status(200).send({data:allProduct})
} 
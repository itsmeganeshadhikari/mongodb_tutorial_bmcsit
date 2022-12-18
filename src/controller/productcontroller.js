

const Product = require("../models/product")

exports.create = (req,res) =>{
    try {
        console.log(req.body);
        const products = new Product(req.body)
        const dataSave = products.save()
        res.send({user:products})
        response.status(200).send({user:products})
    

    } catch (error) {
        response.status(500).send({message:"Error"})
        
    }
}
    exports.getAllProduct = async(req, res)=>{
        const allProduct = await Product.find()
        res.status(200).send({data:allProduct})
    }


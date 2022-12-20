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
exports.update = async (req, res) => {
    const id = req.params.id
    const idExist = await Product.findById({_id: id})
    if(!idExist) {
      res.send({message:"Incorrect id"})
    }
    try {
      const updatedProduct = await Product.findOneAndUpdate(
        { _id: id },
        { $set: { name:req.body.name } },
        { new: true }
      );
      if(updatedProduct){
        res.send({message:"Updated Successfuly", data:updatedProduct})
      }else{
        res.send({message:"Error on update"})
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  
  exports.deleteProduct = async (req, res) => {
    const id = req.params.id
    const idExist = await Product.findById({_id: id})
    if(!idExist) {
      res.send({message:"Incorrect id"})
    }
    try {
      const deleteProduct = await Product.deleteOne({_id: id});
      if(deleteProduct){
        res.send({message:"Deleted Successfuly", data:deleteProduct})
      }else{
        res.send({message:"Error on delete"})
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  
    
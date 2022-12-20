const User = require("../models/User")

exports.create = async(req, res) =>{
    console.log(req.body);
    try {
        const newUser =  new User(req.body)
        await newUser.save()
        res.send({user:newUser})
    } catch (error) {
        res.status(500).send({message:"Error"})
    }
}

exports.getAllUser = async(req, res) =>{
    let userData =  await User.find().populate("product role")
    res.status(200).send({data:userData})
}

exports.update = async (req, res) => {
  const id = req.params.id
  const idExist = await User.findById({_id: id})
  if(!idExist) {
    res.send({message:"Incorrect id"})
  }
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { $set: { name:req.body.name } },
      { new: true }
    );
    if(updatedUser){
      res.send({message:"Updated Successfuly", data:updatedUser})
    }else{
      res.send({message:"Error on update"})
    }
  } catch (error) {
    console.log(error.message);
  }
}

exports.deleteUser = async (req, res) => {
  const id = req.params.id
  const idExist = await User.findById({_id: id})
  if(!idExist) {
    res.send({message:"Incorrect id"})
  }
  try {
    const deleteUser = await User.deleteOne({_id: id});
    if(deleteUser){
      res.send({message:"Deleted Successfuly", data:deleteUser})
    }else{
      res.send({message:"Error on delete"})
    }
  } catch (error) {
    console.log(error.message);
  }
}


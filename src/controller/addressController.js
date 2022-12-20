const Address = require("../models/Address")

exports.create = async(req, res) =>{
    console.log(req.body);
    try {
        const newAddress =  new Address(req.body)
        await newAddress.save()
        res.send({Address:newAddress})
    } catch (error) {
        res.status(500).send({message:"Error"})
    }
}

exports.getAllAddress = async(req, res) =>{
    let AddressData =  await Address.find().populate("product role")
    res.status(200).send({data:AddressData})
}

exports.update = async (req, res) => {
  const id = req.params.id
  const idExist = await Address.findById({_id: id})
  if(!idExist) {
    res.send({message:"Incorrect id"})
  }
  try {
    const updatedAddress = await Address.findOneAndUpdate(
      { _id: id },
      { $set: { name:req.body.name } },
      { new: true }
    );
    if(updatedAddress){
      res.send({message:"Updated Successfuly", data:updatedAddress})
    }else{
      res.send({message:"Error on update"})
    }
  } catch (error) {
    console.log(error.message);
  }
}



  
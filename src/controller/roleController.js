const Role = require("../models/Role");

exports.create = async(req, res) =>{
    console.log(req.body);
    try {
        const newRole =  new Role(req.body)
        await newRole.save()
        res.send({role:newRole})
    } catch (error) {
        res.status(500).send({message:"Error"})
    }
}

exports.getAllRole = async(req, res) =>{
    let roleData =  await Role.find()
    res.status(200).send({data:roleData})
}
<<<<<<< HEAD

const { response } = require("express");
const Role = require("../models/Role")

exports.create = async(req,res) =>{
    
    try {
        const newRole = new Role(req.body)        
        // const newRole = new Role(req.body)
        await newRole.save()
        res.send({role :newRole})
        response.status(200).send({role :newRole})

    } catch (error) {
        response.status(500).send({message:"Error"})
        
    }
}
    exports.getRole = async(req,res) =>{
        let roleData = await Role.find()
        res.status(200).send({data: roleData})
    }

=======
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
>>>>>>> 5cb374518564d83343595a845f3690db230eeab8

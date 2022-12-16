
const { response } = require("express");
const User = require("../models/user")

exports.create = (req,res) =>{
    
    try {
        
        const newUser = new User(req.body)
        const dataSave = newUser.save()
        res.send({user:newUser})
        response.status(200).send({user:"newUser"})

    } catch (error) {
        response.status(500).send({message:"Error"})
        
    }
}
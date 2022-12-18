
const { response } = require("express");
const User = require("../models/user")

exports.create = async(req,res) =>{
    
    try {
        
        const newUser = new User(req.body)
        await newUser.save()
        res.send({user:newUser})
        response.status(200).send({user:newUser})

    } catch (error) {
        response.status(500).send({message:"Error"})
        
    }
}
    exports.getUser = async(req,res) =>{
        let userData = await User.find().populate("product")
        res.status(200).send({data: userData})
    }


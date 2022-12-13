const User = require("../models/User")

exports.create = (req, res) =>{
    console.log(req.body);
    try {
        const newUser =  new User(req.body)
        newUser.save()
        res.send({user:newUser})
    } catch (error) {
        res.status(500).send({message:"Error"})
    }

}
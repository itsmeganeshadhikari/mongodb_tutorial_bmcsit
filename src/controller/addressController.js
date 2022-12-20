const Address = require("../models/Address");

exports.create = async(req, res) =>{
    console.log(req.body);
    try {
        const address =  new Address(req.body)
        await address.save()
        res.send({address:address})
    } catch (error) {
        res.status(500).send({message:"Error"})
    }
}
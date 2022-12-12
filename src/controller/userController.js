const { response } = require("express")
const User = require("../models/User")

exports.create = (req, res) => {
    try {
        console.log(req.body);
        const newUser = new User(req.body)
        const dataSave = newUser.save()
        res.send({ user: newUser })
    }
    catch (e) {
        response.status(500).send({ message: "Error" })

    }
}
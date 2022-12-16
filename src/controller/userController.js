const { response } = require("express")
const User = require("../models/User")

exports.create = async (req, res) => {
    console.log(req.body);

    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.send({ user: newUser })
        response.status(200).send({ user: newUser })

    }
    catch (e) {
        response.status(500).send({ message: "Error" })

    }
}

exports.getUser = async (req, res) => {

}
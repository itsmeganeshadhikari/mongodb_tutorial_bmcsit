const { response } = require("express")
const Role = require("../models/role")

exports.create = async (req, res) => {
    console.log(req.body);

    try {
        const newRole = new Role(req.body)
        await newRole.save()
        res.send({ role: newRole })
        response.status(200).send({ role: newRole })

    }
    catch (e) {
        response.status(500).send({ message: "Error" })

    }
}

exports.getAllRoles = async (req, res) => {
    let roleData = await Role.find().populate()
    res.status(200).send({ data: roleData })
}
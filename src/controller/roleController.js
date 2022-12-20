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
    let roleData = await Role.find()
    res.status(200).send({ data: roleData })
}


exports.updateRole = async (req, res) => {
    // console.log(req.body)
    // console.log(req.params.id)
    try {
        const id = req.params.id;
        console.log(id)
        const roleToUpdate = await Role.findById({ _id: id })
        console.log(roleToUpdate)
        if (!roleToUpdate) {
            res.send({ message: "User does not exist" });

        }
        const updatedRole = await Role.findOneAndUpdate(
            { _id: id },
            { $set: { view_name: req.body.view_name } },
            { new: true }
        )

        if (updatedRole) {
            res.send({ message: "Updated True", updatedRole });

        } else {
            res.send({ message: "Updated false" });

        }

        res.status(200).send(updatedRole);
    } catch (e) {
        res.status(500).send(e.message);
    }

}

exports.deleteRole = async (req, res) => {
    try {
        const id = req.params.id;
        const roleToDelete = await Role.findById({ _id: id });
        if (!roleToDelete) {
            res.send({ message: "User does not exist" });
        }
        roleToDelete.deleteOne()
        res.status(200).send({ roleToDelete })
    } catch (e) {
        res.status(500).send(e.message)

    }
}
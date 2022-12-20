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

exports.getAllUser = async (req, res) => {
    let userData = await User.find().populate("product role")
    res.status(200).send({ data: userData })

}

exports.update = async (req, res) => {
    // console.log(req.body)
    // console.log(req.params.id)
    try {
        const { id } = req.params.id;
        console.log(id)
        const userToUpdate = await User.findById({ _id: id })
        if (!userToUpdate) {
            res.send({ message: "User does not exist" });

        }
        const updatedUser = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { name: req.body.name } },
            { new: true }
        );
        if (updatedUser) {
            res.send({ message: "Updated True", updatedUser });

        } else {
            res.send({ message: "Updated false" });

        }

        res.status(200).send(updatedUser);
    } catch (e) {
        res.status(500).send(e.message);
    }

}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userToDelete = await User.findById({ _id: id });
        if (!userToDelete) {
            res.send({ message: "User does not exist" });
        }
        userToDelete.deleteOne()
        res.status(200).send({ userToDelete })
    } catch (e) {
        res.status(500).send(e.message)

    }
}
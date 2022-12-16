const mongoose = require('mongoose');
const responseMessages = require('../constants/constant');

// design a schema
const roleSchema = new mongoose.Schema({
    name: {
        type: [responseMessages.ADMIN, responseMessages.SUPER_ADMIN, responseMessages.NORMAL_USER],

    },
    view_name: {
        type: String,
        required: true
    }

});

//to save this instantly
roleSchema.methods.toJson = function () {

}

const Role = mongoose.model('Role', roleSchema)
module.exports = Role;
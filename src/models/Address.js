const mongoose = require('mongoose');
const responseMessages = require('../constants/constant');

// design a schema
const addressSchema = new mongoose.Schema({

});

//to save this instantly
addressSchema.methods.toJson = function () {

}

const Address = mongoose.model('Address', addressSchema)
module.exports = Address;
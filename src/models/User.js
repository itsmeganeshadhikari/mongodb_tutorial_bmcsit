const mongoose = require('mongoose')

// design a schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'Too short name'],
        maxlength: [50, 'Too long name'],
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be minimum 6 character long']
    },
    // relation - one to many
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    }
});

const User = mongoose.model('User', userSchema)
module.exports = User;
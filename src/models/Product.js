const mongoose = require('mongoose');

// design a schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'Too short name'],
        maxlength: [50, 'Too long name'],
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        required: true
    },
    price: {
        type: Number,
        required: true,
        minimum: 0
    },
    rating: {
        type: Number,
    },
    sn: {
        type: String,
        unique: true,
        required: true
    },
    manufacturedDate: {
        type: Date,
        required: true,
    },
    expiryDate: {
        type: Date,
        required: true,
    },
}, { timestamps: true }
    // one to one
    // user : mongoose.type.Schema.Types.ObjectID
    // one to many
    // user: [mongoose.type.Schema.Types.ObjectID]

)

const Product = mongoose.model('Product', productSchema)
module.exports = Product;
const mongoose = require('mongoose')
const { string } = require('yup')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        maxlength:[50,'To long name'],
        required: true,
        trim: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    description:{
        type:String,
        maxlength:[300,'To long description'],
        required: true,
        trim: true
    },
    rating:{
        type:Number,
    },
    price:{
        type:Number
    },
    serial_no:{
        type:String,
        required:true,
        unique:true
    },
    manufactureDate:{
        type:Date,
    },
    expireDate:{
        type:Date
    }
})

const Product = mongoose.model('Product',productSchema)
module.exports = Product
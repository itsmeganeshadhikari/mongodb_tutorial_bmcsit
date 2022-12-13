const mongoose = require('mongoose')

const productSchema   = new mongoose.Schema({
    name:{
        type:String,
        minlength:[3,'Too short name '],
        maxlength:[50,'Too long name '],
        required: true,
        trim:true
    },
    description:{
        type:String,
        required: true
    },
    rating:{
        type: Number,
        
    },
    price:{
        type:Number
    },
    serial_no:{
        type:String,
        required:true,
        unique:true
    },
    manufacturingDate:{
    type: Date,
    require:true
    },
    expireDate:{
        type:Date
    }


})
const Product = mongoose.model('Product',productSchema)
module.exports = Product;
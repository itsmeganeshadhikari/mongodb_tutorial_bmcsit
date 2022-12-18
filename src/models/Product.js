<<<<<<< HEAD
const mongoose = require('mongoose')

const productSchema   = new mongoose.Schema({
    name:{
        type:String,
        minlength:[3,'Too short name '],
        maxlength:[50,'Too long name '],
        required: true,
=======
const mongoose =  require('mongoose')

const productSchema =  new mongoose.Schema({
    name:{
        type:String,
        minlength:[3,'To short name'],
        maxlength:[50,'To long name'],
        required:true,
>>>>>>> 5cb374518564d83343595a845f3690db230eeab8
        trim:true
    },
    description:{
        type:String,
<<<<<<< HEAD
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
=======
        required: true,
        unique: true
    },
    rating: {
        type: Number
    },
    price:{
        type: Number
    },
    serail_no:{
        type: String,
        required:true,
        unique: true
    },

    manufactureDate:{
        type: Date,
    },
    expireDate:{
        type:Date,
    }
})

const Product = mongoose.model('Product',productSchema)
module.exports =  Product
>>>>>>> 5cb374518564d83343595a845f3690db230eeab8

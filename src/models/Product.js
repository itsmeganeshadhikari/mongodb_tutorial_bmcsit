const mongoose =  require('mongoose')

const productSchema =  new mongoose.Schema({
    name:{
        type:String,
        minlength:[3,'To short name'],
        maxlength:[50,'To long name'],
        required:true,
        trim:true
    },
    description:{
        type:String,
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
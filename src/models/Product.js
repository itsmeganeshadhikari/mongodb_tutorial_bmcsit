const mongoose =  require('mongoose')

const productSchema =  new mongoose.Schema({
    name:{
        type:String,
        minlength:[3,'To short name'],
        maxlength:[50,'To long name'],
        required:true,
        trim:true
    },
    price:{
        type:Number,
    },
    rating: {
        type: Number,
      
        
    },
    description: {
        type: String,
        required: true,
        unique: true
        
    },
    serial_no: {
        type: Number,
        required: true,
        unique: true,
        
    },
    manufactureDate: {
        type: Date,
        
    },
    expireDate: {
        type: Date, 
    },
})

const Product = mongoose.model('Product',productSchema)
module.exports =  Product
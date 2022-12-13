const mongoose =  require('mongoose')

const userSchema =  new mongoose.Schema({
    name:{
        type:String,
        minlength:[3,'To short name'],
        maxlength:[50,'To long name'],
        required:true,
        trim:true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: [6,'Six character long']
    }
})

const User = mongoose.model('User',userSchema)
module.exports =  User
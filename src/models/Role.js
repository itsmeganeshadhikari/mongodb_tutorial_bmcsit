<<<<<<< HEAD
const mongoose = require('mongoose')
const responseMessages = require('../constants/constant')

const roleSchema  = new mongoose.Schema({
    name:{
        type:[responseMessages.ADMIN,responseMessages.SUPER_ADMIN, responseMessages.NORMAL_USER],
       
    },
    view_name:{
        type:String,
        required:true
    }
})
   
roleSchema.methods.toJSON =function () {

}

const Role = mongoose.model('Role',roleSchema)
module.exports = Role
=======
const mongoose =  require('mongoose')

const roleSchema =  new mongoose.Schema({
    view_name:{
        type: String,
        required: true
    }
})

const Role = mongoose.model('Role',roleSchema)
module.exports =  Role
>>>>>>> 5cb374518564d83343595a845f3690db230eeab8

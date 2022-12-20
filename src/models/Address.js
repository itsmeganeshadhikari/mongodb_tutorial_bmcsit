const mongoose =  require('mongoose');
const { string } = require('yup');
const addressRoute = require('../routes/addressRoutes');

const citySchema = new mongoose.Schema({
    name: String,
    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
    logitude:{
        type:[Number],
    },
    latitude:{
        type:[Number]
    }
  },{timestamps:true});

const Address = mongoose.model('Address',citySchema)
module.exports =  Address
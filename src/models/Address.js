const { default: mongoose } = require("mongoose");

const addressSchema = new mongoose.Schema({
    name: String,
    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
        required: false
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
    longitude: {
        type:[Number]
    },
    latitude: {
        type:[Number]
    }
  },{timestamps:true});
  const Address = mongoose.model('Address',addressSchema)
  module.exports =  Address
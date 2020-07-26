const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstName: {
      type: String
    },
    lastName: {
      type: String,
      required: true
    },
    bornDate: {
      type: Date,
      required: true
    }
  })

  module.exports = mongoose.model('Customer', customerSchema)
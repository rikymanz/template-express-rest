const mongoose = require('mongoose')

const coinSchema = new mongoose.Schema({
    owner: {
      type: String,
      required: true
    },
    coin: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  })

  module.exports = mongoose.model('Coin', coinSchema)
const mongoose = require('mongoose')

const stockSchema  = mongoose.Schema({
    index:String,
    name:String,
    price: Number,
},{ timestamps: { createdAt: 'created_at' } })
module.exports = mongoose.model('Stock', stockSchema)
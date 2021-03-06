const mongoose = require('mongoose')

const stockSchema  = mongoose.Schema({
    index:String,
    name:String,
    price: Number,
})
module.exports = mongoose.model('Stock', stockSchema)
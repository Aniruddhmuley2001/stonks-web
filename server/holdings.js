const mongoose = require('mongoose')

const holdingSchema  = mongoose.Schema({
    stockId: mongoose.Types.ObjectId,
    userId : mongoose.Types.ObjectId,
    quantity : Number
})
module.exports = mongoose.model('Holding', holdingSchema)
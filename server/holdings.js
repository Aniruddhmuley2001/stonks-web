const mongoose = require('mongoose')

const holdingSchema  = mongoose.Schema({
    stockId: mongoose.Types.ObjectId,
    userId : mongoose.Types.ObjectId,
    quantity : Number
},{ timestamps: { createdAt: 'created_at' } })
module.exports = mongoose.model('Holding', holdingSchema)
const mongoose = require('mongoose')

const holdingSchema  = mongoose.Schema({
    stockId: {type : mongoose.Types.ObjectId, ref:'Stock'},
    userId : {type:mongoose.Types.ObjectId,ref:'User'},
    quantity : Number
},{ timestamps: { createdAt: 'created_at' } })
module.exports = mongoose.model('Holding', holdingSchema)
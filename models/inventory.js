const mongoose = require('mongoose')

const inventorySchema = mongoose.Schema({
    itemName : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    }
},{
    timestamps : true
})

module.exports = mongoose.model('Inventory', inventorySchema)
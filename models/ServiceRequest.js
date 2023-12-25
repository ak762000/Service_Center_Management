const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    customerName : {
        type : String,
        required :[true,"Please add customer name "]
    },
    deviceDetails : {
        type : String,
        required : [true,"Please add device details"]
    },
    serviceDetails : {
        type : String,
        required : [true,"Please add service details"]
    },
    status : {
        type : String,
        enum : ["pending","in-progress","completed"],
        default : 'pending'
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    email : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
},{
    timestamps : true
})

module.exports = mongoose.model("ServiceRequest",serviceSchema)
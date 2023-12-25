const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema({
    customerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'ServiceRequest',
    },
    staffId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : [true]
    },
    email : {
        type : mongoose.Schema.Types.String,
        ref : 'User',
        required : [true]
    },
    appointmentDate : {
        type : Date,
        required : [true]
    },
    status : {
        type : String,
        enum : ['scheduled','in-progress','completed'],
        default : 'scheduled'
    }
},{
    timestamps : true
})

module.exports = mongoose.model('Appointment',appointmentSchema)
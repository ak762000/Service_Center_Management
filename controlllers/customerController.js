const express = require('express')
const auth = require('../middlewares/auth')
const ServiceRequest = require('../models/ServiceRequest')
const asyncHandler = require('express-async-handler')
const Appointment = require('../models/appointment')


//Create customer service request
const customerServiceRequest = asyncHandler(async(req,res) =>{
    const {customerName,deviceDetails,serviceDetails,status} = req.body

    const cust = new ServiceRequest({
        customerName,deviceDetails,serviceDetails,status
    })
    await cust.save()

    const customer_Id = cust._id
    console.log(customer_Id)


    res.status(200).json({
    data : cust,
    message : "Customer Service Request created successfully"
    })
    
})
 
//Get a list of customer service requests
const getCustomerServiceRequests = asyncHandler(async(req,res)=>{
    const getCust = await ServiceRequest.find()
    const countCust = await ServiceRequest.countDocuments()
    if(getCust.length === 0){
        res.status(404).json({ message : "NO SERVICE REQUESTS FOUND "})
    }
    res.status(200).json({
        customers : getCust,
        customer_count : countCust,
        message : "ALL CUSTOMER REQUESTS SERVICE LIST RETRIEVED"
    })
})


//Get Service History
const serviceHistory = asyncHandler(async(req,res) =>{
    const customerId = req.params.id

    const history = await Appointment.find({customerId})
    const customer_details = await ServiceRequest.findById({ _id : customerId})

    if(!history){
        return res.status(500).json({
            message : "Internal Server Error"
        })
    }
    res.status(200).json({
        data : history,
        customer_details : customer_details,
        message : "History of the customer received!"
    })
})




module.exports = { customerServiceRequest, getCustomerServiceRequests, serviceHistory}
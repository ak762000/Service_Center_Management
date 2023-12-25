const express = require('express')
const ServiceRequest = require('../models/ServiceRequest')
const Appointment = require('../models/appointment')
const asyncHandler = require('express-async-handler')
const { model } = require('mongoose')


const appointmentController = asyncHandler(async(req,res)=>{
    
    const {appointmentDate,status, customer_Details } = req.body//appointmnet details
    const user = req.user//Fetch the staff id
    console.log(user)
    
    const {customerName,deviceDetails,serviceDetails} = customer_Details //For customer details 

    const serviceRequest = new ServiceRequest({
        customerName, deviceDetails, serviceDetails
    })
    await serviceRequest.save()

    const customer_Id = serviceRequest._id//Extract the id from the service request model and name it as customer id
    console.log(customer_Id)

    const appointment = new Appointment({
        customerId : customer_Id,
        staffId : user.staff_id,
        email : user.email,
        appointmentDate,
        status
    })

    await appointment.save()

    res.status(200).json({
        data : appointment,
        message : "Appointment Date Scheduled"
    })
})  

const getListAppointments = asyncHandler(async(req,res)=>{
    const getAppointment = await Appointment.find()
    const getAppointmentCount = await Appointment.countDocuments()
    if(getAppointment.length === 0){
        res.status(404).json({ message : "NO APPOINTMENTS FOUND "})
    }
    res.status(200).json({
        data : getAppointment,
        count : getAppointmentCount,
        message : "APPOINT MENT LIST RETREIVED"
    })
})

module.exports = {appointmentController , getListAppointments}
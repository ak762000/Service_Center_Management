const Joi = require('@hapi/joi')

const userSchema = Joi.object({
    email : Joi.string().email().lowercase().required(),
    password : Joi.string().min(8).required(),
    role : Joi.string().required()
})

const loginSchema = Joi.object({
    email : Joi.string().email().lowercase().required(),
    password : Joi.string().min(8).required()
})

//Appointment , //Inventories



module.exports = { userSchema, loginSchema }
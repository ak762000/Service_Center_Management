const express = require('express')
const User = require('../models/User')
const serviceRequest = require('../models/ServiceRequest')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { userSchema, loginSchema } = require('../helpers/validateData')

//Register a user
const registerController = asyncHandler(async(req,res)=>{
    
    const register_result = await userSchema.validateAsync(req.body)
    console.log(register_result)

    //To check if the email ID is already taken
    const existingUser = await User.findOne({
        email : register_result.email
    })
    if(existingUser){
        return res.status(409).json({message : "Email ID already registered!"})
    }
    //Create new User details
    const newUser = new User(register_result)

    const savedUser = await newUser.save()//Save the user in the savedUser variable 

    res.status(200).json({
        data : savedUser,
        message : "User created successfully!"
    })
})


//Login a user
const loginController = asyncHandler(async(req,res)=>{
    const login_result = await loginSchema.validateAsync(req.body)
    console.log(login_result)
    // const { email , password} = req.body
 
    const user = await User.findOne({
        email : login_result.email 
    })
    if(!user){
        res.status(401).json({
            message : "User not registered!"
        })
    }
    const isMatch = await bcrypt.compare(login_result.password, user.password)
    if(!isMatch){
        res.status(401).json({
            message : "Password doesn't match"
        })
    }
    const accessToken = jwt.sign({
        user : {
            staff_id : user._id,
            email : req.body.email
        }   
    },
        process.env.JWT_SECRET_KEY,
        {expiresIn : "180m"})

    res.status(200).json({
        accessToken : accessToken,
        message : "Logged In Successfully!"
    })

})


//get all Users
const getUsers = asyncHandler(async(req,res) =>{
    const fetchUsers = await User.find()
    const countUsers = await User.countDocuments()
    if(!fetchUsers){
        return res.status(404).json({
            message : "Users not fetched"
        })
    }
    res.status(200).json({
        data : fetchUsers,
        count : countUsers,
        message : 'Users fetched successfully!'})
})


module.exports = {registerController,getUsers,loginController}
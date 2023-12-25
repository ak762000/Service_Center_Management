const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : [true,"Please add your email ID "],
        unique : [true,"Email ID already taken!"]
    },
    password : {
        type : String,
        required : [true,"Please add your password"]
    },
    role : {
        type : String, //role = Staff
        default : 'staff'
    }
},
{
    timestamps : true
})

userSchema.pre('save',async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

module.exports = mongoose.model("User",userSchema)
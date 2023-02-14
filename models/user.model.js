const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"],
        },
        
        lastName: {
            type: String,
            required: [true, "last name is required"],
        },
        email: {
            type: String,
            required: [true, "email is required"],
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            unique: true,
            lowercase:true,
            trim: true,    
        },
        password:{
            type: String,
            required: [true, "password is required"],
            minLength: [8, "min length: 8"],
        },
        role: {
            type: String,
            enum: ['teacher', 'strudent', 'parent'],
            default: 'guest',
            required: [true, "role is required"],
        },
        portfolio: {
            type: String,
        },
        linkedIn: {
            type: String,
        },
        /*curso?*/
        profilePic: {
            type: String,
        },
        grades: {
            type: Array,
        },
        phoneNumber: {
            type: Number,
        }
    }
)
module.exports = mongoose.model("User", schema);
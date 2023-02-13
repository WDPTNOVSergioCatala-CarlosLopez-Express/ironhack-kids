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

        },
        role: {
            
        },
        portfolio: {
                
        },
        linkedIn: {
            
        },
        /*curso?*/
        profilePic: {
            
        },
        grades: {

        },
        phoneNumber: {

        }
    }
)
module.exports = mongoose.model("User", schema);
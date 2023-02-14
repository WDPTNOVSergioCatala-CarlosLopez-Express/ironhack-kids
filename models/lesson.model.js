const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"],
        },
        content: {
            type: String,
        },
        module: {
            type: Number,
            required: [true, "Module number is required"]
        }
        //Course?

        
    }

    
)
module.exports = mongoose.model("Lesson", schema);
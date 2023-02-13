const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"],
        },
        content: {

        },
        module: {

        }
        //Course?

        
    }

    
)
module.exports = mongoose.model("Lesson", schema);
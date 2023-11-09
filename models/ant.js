const mongoose = require("mongoose");
 
const antSchema = mongoose.Schema({
    antName: {
        type: String,
        required: true
    },
    antAge: {
        type: Number,
        required: true
    },
    antColor: {
        type: String,
        required: true,
       
        
    }
});
 
module.exports = mongoose.model("ant", antSchema);
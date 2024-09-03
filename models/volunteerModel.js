const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    name:{
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true
    },
    phone:{
        type : String,
        require : true
    },
    skills:{
        type : String,
        require : true
    },
    complete:{
        type : Boolean
    }
});

const volunteerModel = new mongoose.model("volunteers",volunteerSchema);
module.exports= volunteerModel;
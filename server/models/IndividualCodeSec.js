const mongoose = require ("mongoose");

const IndividualCodeSec = new mongoose.Schema(
    {
       name:{
            type: String,
            required: true,
            trim: true,
       },
      
        Code: {
            type: String,
            required: true,
            trim: true,
        },
    }
)

module.export = mongoose.model("individualCodeSec",IndividualCodeSec);
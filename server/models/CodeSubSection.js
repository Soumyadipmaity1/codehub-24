const mongoose = require ("mongoose");

const CodeSubSection = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",
        },
        updatedAt:{
            type: Date,
            default: Date.now
        },
        description:{
            type: String,
            required: true,
            trim: true,
       },
        IndividualCodeSec: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "IndividualCodeSec",
        }],
    }
)

module.export = mongoose.model("codeSubSection", CodeSubSection);
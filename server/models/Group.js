const mongoose = require ("mongoose");

const groupSchema = new mongoose.Schema(
    {
        groupName: {
            type: String,
            required: true,
            trim: true,
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",
        },
        groupDescription: {
            type: String,
            required: true,
            trim: true,
        },
        passKey: {
            type: String,
            required: true,
            trim: true,
        },
        codeSection: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "codeSection", 
        },
        
    }
)

module.export = mongoose.model("Group", groupSchema);
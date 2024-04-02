const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
    {
        groupName: {
            type: String,
            required: true,
            trim: true,
        },
        user: [{ //how many of them are in the group
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",
        }],
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
        individualCodeSec: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "individualCodeSec",
            required: true,
        }],
    }
)

module.exports = mongoose.model("group", groupSchema);
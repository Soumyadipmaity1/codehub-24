const mongoose = require("mongoose");

const IndividualCodeSec = new mongoose.Schema(
    {

        codeName: {
            type: String,
            required: true,
            trim: true,
        },
        updatedAt: {
            type: Date,
            default: Date.now
        },
        code: {
            type: String,
            required: true,
            trim: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",
        },
        group: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "group",
        }

    }
)

module.exports = mongoose.model("individualCodeSec", IndividualCodeSec);
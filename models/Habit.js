const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
        },

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        targetDays: {
            type: Number,
            default: 30,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Habit", habitSchema);
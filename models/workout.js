const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{

        name: {
            type: String,
            trim: true,
            required: "Name of Excercise"
        },
        type: {
            type: String,
            trim: true,
            required: "Type of Excercise"
        },
        duration: {
            type: Number,
            required: "In minutes"
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        weight: {
            type: Number
        },
        distance: {
            type: Number
        },

    }],
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating Schema

const fitnessSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
        },
        name: {
          type: String,
        },
        duration: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        distance: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

fitnessSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise, index) => {
    return total + exercise.duration;
  }, 0);
});

const exercises = mongoose.model("exercises", fitnessSchema);

module.exports = exercises;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ScoreSchema = new Schema({
  score: {
    type: Int32Array,
    required: true
  },
  numberOfQustions: {
    type: Int32Array,
    required: true
  },
  numberOfAnsQustions: {
    type: Int32Array,
    required: true
  },
  correctAnswers: {
    type: Int32Array,
    required: true
  },
  wrongAnswers: {
    type: Int32Array,
    required: true
  }
});
module.exports = Score = mongoose.model("scores", ScoreSchema);
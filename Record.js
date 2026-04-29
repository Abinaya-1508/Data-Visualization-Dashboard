const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
  Intensity: Number,
  Likelihood: Number,
  Relevance: Number,
  Year: Number,
  Country: String,
  Topics: String,
  Region: String,
  City: String,
  Sector: String,
  PEST: String,
  Source: String,
  SWOT: String,
});

module.exports = mongoose.model("Record", RecordSchema);

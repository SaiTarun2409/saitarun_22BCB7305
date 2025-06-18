const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  genre: { type: String },
  duration: { type: String }, // Example: "3:45"
  addedAt: { type: Date, default: Date.now },
  youtube: {type: String }
});

module.exports = mongoose.model('Song', SongSchema);

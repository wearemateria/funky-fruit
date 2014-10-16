'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ScoreSchema = new Schema({
  picture: String,
  score: Number
});

module.exports = mongoose.model('Score', ScoreSchema);
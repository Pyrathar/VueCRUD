var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var comments = new Schema({
  name: {
    type: String
  },
  type: {
    type: Number
  },
  description: {
    type: String
  },
  status: {
    type: String
  },
  createdTime: {
    type: Date
  },
},{
    collection: 'issue'
});

module.exports = mongoose.model('comment', comment);
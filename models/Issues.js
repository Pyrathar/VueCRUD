var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Issue = new Schema({
  name: {
    type: String
  },
  upvotes: {
    type: Number
  },
  type: {
    type: String
  },
  downvotes: {
    type: Number
  },
  description: {
    type: String
  },
  comments: {
    type: String
  },
  createdBy: {
    type: String
  },

},{
    collection: 'issues'
});

module.exports = mongoose.model('Issue', Issue);

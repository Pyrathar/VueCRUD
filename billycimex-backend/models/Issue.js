var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Issue = new Schema({
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
  tag: {
    type: String,
    ref: 'Tag',
    required: true
  }
},{
    collection: 'issue'
});

module.exports = mongoose.model('Issue', Issue);
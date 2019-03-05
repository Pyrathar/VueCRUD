var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Tag = new Schema({
  name: {
    type: String
  }
},{
    collection: 'tag'
});

module.exports = mongoose.model('Tag', Tag);
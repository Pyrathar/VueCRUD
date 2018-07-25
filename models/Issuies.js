var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Invoice = new Schema({
  name: {
    type: String
  },
  upvotes: {
    type: Number
  },
  downvotes: {
    type: Number
  },
  Description: {
    type: String
  },
  Comments: {
    type: String
  },

},{
    collection: 'invoices'
});

module.exports = mongoose.model('Invoice', Invoice);

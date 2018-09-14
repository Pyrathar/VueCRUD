// itemRoutes.js

var express = require('express');
var app = express();
var issuesRoutes = express.Router();
var passport = require('passport');
require('../config/passport')(passport);

// Require Item model in our routes module
var Issue = require('../models/Issues');


// Defined get data(index or listing) route
issuesRoutes.route('/add').post(function (req, res) {
  var issue = new Issue(req.body);
  console.log(issue)
      issue.save()
    .then(issue => {
    res.status(200).json({'item': 'Item added successfully'});
    })
    .catch(err => {
      console.log(err)
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
issuesRoutes.route('/:type').get(function (req, res) {
  var type = req.params.type
  Issue.find({type:type},function (err, issues){
    if(err){
      console.log(err);
    }
    else {
      res.json(issues);
    }
  });
});

issuesRoutes.route('/view/:id').get(function (req, res) {
  console.log(req)
  var id = req.params.id
  Issue.findById(id, function (err, issues){
    if(err){
      console.log(err);
    }
    else {
      res.json(issues);
    }
  });
});

module.exports = issuesRoutes;

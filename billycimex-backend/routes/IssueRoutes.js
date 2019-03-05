var express = require('express');
var app = express();
var IssueRoutes = express.Router();
var Issue = require('../models/Issue');

// Defined store route
IssueRoutes.route('/add').post(function (req, res) {
  var issue = new Issue(req.body);
      issue.save()
    .then(issue => {
    res.status(200).json({'issue': 'Issue added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
IssueRoutes.route('/').get(function (req, res) {
  Issue.find(function (err, issues){
    if(err){
      console.log(err);
    }
    else {
      res.json(issues);
    }
  });
});

// Defined edit route
IssueRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Issue.findById(id, function (err, issue){
      res.json(issue);
  });
});

//  Defined update route
IssueRoutes.route('/update/:id').post(function (req, res) {
  Issue.findById(req.params.id, function(err, issue) {
    if (!issue)
      return next(new Error('Could not load Document'));
    else {
      issue.name = req.body.name;
      issue.price = req.body.price;

      issue.save().then(issue => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
IssueRoutes.route('/delete/:id').get(function (req, res) {
  Issue.findByIdAndRemove({_id: req.params.id}, function(err, issue){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = IssueRoutes;
var express = require('express');
var app = express();
var TagRoutes = express.Router();
var Tag = require('../models/Tag');

// Defined store route
TagRoutes.route('/add').post(function (req, res) {
  var tag = new Tag(req.body);
      tag.save()
    .then(tag => {
    res.status(200).json({'tag': 'tag added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
TagRoutes.route('/').get(function (req, res) {
  Tag.find(function (err, tags){
    if(err){
      console.log(err);
    }
    else {
      res.json(tags);
    }
  });
});

// Defined edit route
TagRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Tag.findById(id, function (err, tag){
      res.json(tag);
  });
});


// Defined delete | remove | destroy route
TagRoutes.route('/delete/:id').get(function (req, res) {
  Tag.findByIdAndRemove({_id: req.params.id}, function(err, tag){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = TagRoutes;
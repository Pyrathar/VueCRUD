// itemRoutes.js

var express = require('express');
var app = express();
var itemRoutes = express.Router();
var passport = require('passport');
require('../config/passport')(passport);

// Require Item model in our routes module
var Item = require('../models/Items');

// Defined store route
itemRoutes.post('/add', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    console.log(req.body)
    var item = new Item(req.body);
        item.save()
      .then(item => {
      res.status(200).json({'item': 'Item added successfully'});
      })
      .catch(err => {
        console.log(err)
      res.status(400).send("unable to save to database");
      });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

// Defined get data(index or listing) route
itemRoutes.route('/').get(function (req, res) {
  Item.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Defined edit route
itemRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Item.findById(id, function (err, item){
      res.json(item);
  });
});

//  Defined update route
itemRoutes.route('/update/:id').post(function (req, res) {
  Item.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.name = req.body.name;
      item.price = req.body.price;

      item.save().then(item => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
itemRoutes.route('/delete/:id').get(function (req, res) {
  Item.findByIdAndRemove({_id: req.params.id}, function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = itemRoutes;

// Function to get tokens
function getToken(headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

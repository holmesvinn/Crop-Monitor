var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var forEach = require('async-foreach').forEach;
var url = 'mongodb://vision:vision@ds159497.mlab.com:59497/vision';





router.get('/', function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('onlineevents').find({}).toArray(function(err, allData) {
      db.close();
      res.json(allData);
    });
  });
});



module.exports = router;
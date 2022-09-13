var express = require('express');
var router = express.Router();

// CONTROLLERS

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

module.exports = router;

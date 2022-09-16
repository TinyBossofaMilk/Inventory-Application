const Type = require('../models/type');

const { body, validationResult } = require("express-validator");

var async = require('async');

exports.types_list = function(req, res) {
    res.render('type-list');
};
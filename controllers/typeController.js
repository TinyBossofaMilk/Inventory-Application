const Type = require('../models/type');

const { body, validationResult } = require("express-validator");

var async = require('async');

exports.types_list = function(req, res) {

    Type.find()
        .exec(function (err, list_types){
            if (err) {return next(err);}
            res.render('type-list', {types_list: list_types});             
        });
};
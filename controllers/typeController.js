const Type = require('../models/type');

const { body, validationResult } = require("express-validator");

var async = require('async');

exports.types_list = function(req, res) {

    async.parallel({
        type: function(callback) {
            Type.find();
        }
    }, function (err, results) {
        if (err) {return next(err);}
        res.render('type-list');

    }
    )


};
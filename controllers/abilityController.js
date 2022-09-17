const Ability = require('../models/ability');

const { body, validationResult } = require("express-validator");

var async = require('async');

exports.ability_list_get = function (req, res) {
    Ability.find()
    .exec(function (err, abilities_types){
        if (err) {return next(err);}
        res.render('ability-list', {abilities_types: abilities_types});
    });
};

exports.ability_post = function (req, res) {

};
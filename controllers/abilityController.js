const Ability = require('../models/ability');

const { body, validationResult } = require("express-validator");

var async = require('async');

exports.ability_list_get = function (req, res) {
    res.render('ability-list');
};

exports.ability_post = function (req, res) {

};
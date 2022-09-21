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

exports.ability_create_get = function (req, res) {
    res.render('ability-form');
};

exports.ability_create_post = [
    body('name').trim().isLength({min: 1}).escape(),
    body('desc').trim().isLength({min: 1}).escape(),

    (req, res, next) =>  {
        let ability = new Ability({
            name: req.body.name,
            desc: req.body.desc
        });

        Ability.save(function (err) {
            
            if(err) {return next(err)}
        });

        res.redirect('ability-list');
}]
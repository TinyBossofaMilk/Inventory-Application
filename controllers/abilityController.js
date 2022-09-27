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

    // Validate and sanitize fields.
    body("name", "Ability name required.").trim().isLength({min:1}).escape(),
    body("desc", "Ability description required.").trim().isLength({min:1}).escape(),

    (req, res, next) =>  {
        const errors = validationResult(req);

        const ability = new Ability({
            name: req.body.name,
            desc: req.body.desc
        });

        if(!errors.isEmpty()){
            res.render("ability-form", {
                errors: errors.array()
            })
            return;
        }
        else{
            ability.save(function (err) {
                if(err) {return next(err)}
            });
        }

        res.redirect('ability-list');
}]
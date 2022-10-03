const Pokemon = require('../models/pokemon');
const Type = require('../models/type');
const Ability = require('../models/ability');

const { body, validationResult } = require("express-validator");

var async = require('async');

// home page
exports.index = function(req, res) {
    res.render("home");
};

// pokemon search page
exports.pokemon_search_get = (req, res) => {
    async.parallel({
        type: function (callback) {
            Type.find(callback)
        },
        ability: function (callback) {
            Ability.find(callback)
        },
        pokemon: function (callback) {
            Pokemon.find(callback)
        }
    }, function (err, results) {
        if(err) {return next(err)}
        res.render('pokemon-search', {pokemon_list: results.pokemon, type_list: results.type})
    })
};

//GET Pokemon profile page
exports.pokemon_get = (req, res) => {
    Pokemon.findById(req.params.id).exec(
        function (err, pokemon) {
            if(err) return next(err);
            res.render('pokemon-detail', {pokemon: pokemon})
        }
    );
};

//GET create pokemon page
exports.pokemon_create_get = (req, res) => {
    async.parallel({
        type: function (callback) {
            Type.find(callback)
        },
        ability: function (callback) {
            Ability.find(callback)
        } 
    }, function(err, results) {
        if(err) {return next(err)}
        res.render('pokemon-form', {title:'Add a Pokemon!', type_list: results.type});
    })
};

//POST create pokemon page
exports.pokemon_create_post = [

    // Validate and sanitize fields.
    body('name', 'Name must not be empty.').trim().isLength({min: 1}).escape(),
    body('evolvesFrom', 'Evolves from field must not be empty. asdlkfas').escape(),
    body('evolvesTo', 'Evolves to field must not be empty.').escape(),
    body('desc', 'Description must not be empty.').trim().isLength({min: 1}).escape(),
    body('ability', 'Ability must not be empty.').trim().isLength({min: 1}).escape(),
    body('height', 'Height must not be empty.').trim().isNumeric({min:0}).escape(),
    body('weight', 'Weight must not be empty.').trim().isNumeric({min:0}).escape(),
    
    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);
        
        const pokemon = new Pokemon({
            name: req.body.name,
            type: [req.body.type],
            evolvesFrom: req.body.evolvesFrom,
            evolvesTo: req.body.evolvesTo,
            desc: req.body.desc,
            ability: req.body.ability,
            height: req.body.height,
            weight: req.body.weight
        });

        // if(res.body.type_2 != "(none)")
        //     pokemon.type.push(res.body.type_2);

        if(!errors.isEmpty()){
            Type.find()
                .exec( function (err, type) {
                    if (err) {return next(err);}                    
                    res.render('pokemon-form', {
                        type_list: type,
                        errors: errors.array(),
                        pokemon: pokemon
                    });
                })
            return;
        }
        else{   
            pokemon.save(function (err) {
                if(err) {return next(err)}
                res.redirect("home")
            });
        }
}];

// GET pokemon update form
exports.pokemon_update_get = (req, res) => {

};

// POST pokemon update form
exports.pokemon_update_post = [
    // res.send("not yet implemented")
]

// GET pokemon delete form
exports.pokemon_delete_get = (req, res, next) => {
    Pokemon.findById(req.params.id)
        .exec((err, pokemon) => {
        if(err) return next(err);
        res.render('pokemon-delete', {pokemon:pokemon})
    });
}

// delete a pokemon
exports.pokemon_delete_post = (req, res) => {
    res.send("not yet implemented")
};

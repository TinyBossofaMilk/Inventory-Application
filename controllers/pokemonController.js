const Pokemon = require('../models/pokemon');
const Type = require('../models/type');
const Ability = require('../models/ability');

const { body, validationResult } = require("express-validator");

var async = require('async');
const type = require('../models/type');

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
        res.render('pokemon-search', {type_list: results.type})
    }
    )
};

//view specific pokemon deets
exports.pokemon_get = (req, res) => {
    res.send("not yet implemented")
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
    body('height', 'Ability must not be empty.').trim().isNumeric({min:0}).escape(),
    body('weight', 'Ability must not be empty.').trim().isNumeric({min:0}).escape(),
    
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
            });
        }
}];

// delete a pokemon
exports.pokemon_delete_post = (req, res) => {
    res.send("not yet implemented")
};

// update individual pkmn details
exports.pokemon_update_post = (req, res) => {
    res.send("not yet implemented")
};



// exports.index = function(req, res) {
//     async.parallel({
//         book_count: function(callback) {
//             Book.countDocuments({},callback);
//         },
//         book_instance_count: function(callback) {
//             BookInstance.countDocuments({},callback);
//         },
//         book_instance_available_count: function(callback) {
//             BookInstance.countDocuments({status:'Available'},callback);
//         },
//         author_count: function(callback) {
//             Author.countDocuments({},callback);
//         },
//         genre_count: function(callback) {
//             Genre.countDocuments({},callback);
//         },
//     }, function(err, results) {
//         res.render('index', { title: 'Local Library Home', error: err, data: results });
//     });
// };
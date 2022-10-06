const Ability = require('../models/ability');
const Pokemon = require('../models/pokemon')

const { body, validationResult } = require("express-validator");

var async = require('async');

exports.ability_list_get = function (req, res) {
    Ability.find()
    .sort({name:1})
    .exec(function (err, abilities_types){
        if (err) {return next(err);}
        res.render('ability-list', {abilities_types: abilities_types});
    });
};

exports.ability_create_get = function (req, res) {
    res.render('ability-form', {title:"Add an Ability"});
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
                res.redirect(ability.url);
            });
        }

}]

exports.ability_detail_get = function (req, res, next) {
    async.parallel(
        {
            ability(callback){
                Ability.findById(req.params.id)
                    .exec(callback);
            },
            pokemon_list(callback) {
                Pokemon.find({ability: req.params.id})
                    .exec(callback);
            }
        },
        (err, results) => {
            if(err) return next(err);

            if(results.ability == null) {
                const err = new Error("Ability not found.");
                err.status = 404;
                return next(err);
            }

            // console.log(pokemon_list)
            
            // Successful, so render.
            res.render("ability-detail", {
                ability: results.ability, 
                pokemon_list: results.pokemon_list
            })
        }
    )
};
// async.parallel({
//     ability: function(callback) {
//         // console.log(req.params.id);
//         Ability.findById(req.params.id)
//         .populate('name')
//         .populate('desc')
//         .exec(callback);
//     },
//     pokemon: function(callback) {
//         Pokemon.find({ability: req.params.id})
//         .exec(callback);
//     }
// }, function (err, results) {
//     if(err) {return next(err);}
//     if(results.ability = null){
//         const err = new Error("Ability not found")
//         err.status = 404;
//         return next(err);
//     }
//     console.log(results.ability);
//     res.render('ability-detail', {
//         ability: results.ability
//     })
// });

/*
// Display detail page for a specific Genre.
exports.genre_detail = (req, res, next) => {
  async.parallel(
    {
      genre(callback) {
        Genre.findById(req.params.id).exec(callback);
      },

      genre_books(callback) {
        Book.find({ genre: req.params.id }).exec(callback);
      },
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      if (results.genre == null) {
        // No results.
        const err = new Error("Genre not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render
      res.render("genre_detail", {
        title: "Genre Detail",
        genre: results.genre,
        genre_books: results.genre_books,
      });
    }
  );
};



The ID of the required genre record is encoded at the end of the URL and extracted automatically based on the route definition (/genre/:id). 
The ID is accessed within the controller via the request parameters: req.params.id. 
It is used in Genre.findById() to get the current genre. 
It is also used to get all Book objects that have the genre ID in their genre field: Book.find({ 'genre': req.params.id }).


*/















exports.ability_update_get = function (req, res, next) {
    Ability.findById(req.params.id).exec(
        function (err, ability){
            res.render('ability-form', {title: "Update Ability: " + ability.name, ability: ability})
        }
    )
};

exports.ability_update_post = [
    
    // Validate and sanitize fields.
    body("name", "Ability name required.").trim().isLength({min:1}).escape(),
    body("desc", "Ability description required.").trim().isLength({min:1}).escape(),
    
    // Process request after validation and sanitation
    (req, res, next) =>  {

        // Extract the validation errors from a request
        const errors = validationResult(req);

        // Create an Ability object with the escaped/trimmed data and old id.
        const ability = new Ability({
            name: req.body.name,
            desc: req.body.desc,
            _id: req.params.id
        });

        if(!errors.isEmpty()){
            res.render("ability-update", {
                title: "Update Ability:" + ability.name,
                ability: ability,
                errors: errors.array()
            })
            return;
        }
        else{
            // Data from form is valid. Update record.
            Ability.findByIdAndUpdate(req.params.id, ability, {}, (err, updatedAbility) => {
                if(err) return next(err);
                res.redirect(updatedAbility.url);
            })
        }
    }
];

exports.ability_delete_get = (req, res, next) => {
    Ability.findById(req.params.id).exec((err, ability) => {
        res.render('ability-delete', {ability: ability})
    });
};

exports.ability_delete_post = (req, res, next) => {
    Ability.findByIdAndDelete(req.params.id, function deleteAbility(err) {
        if(err) return next(err);
        res.redirect('/ability-list');
    });
};
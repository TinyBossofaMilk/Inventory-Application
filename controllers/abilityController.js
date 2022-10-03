const Ability = require('../models/ability');
const Pokemon = require('../models/pokemon')

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

exports.ability_detail_get = function (req, res, next) {
    async.parallel(
        {
            ability(callback){
                Ability.findById(req.params.id)
                    .exec(callback);
            }
            // ,
            // pokemon(callback){
            //     Pokemon.find({ability: req.params.id})
            //         .exec(callback);
            // }
        },
        (err, results) => {
            if(err) return next(err);

            if(results.ability == null) {
                const err = new Error("Ability not found.");
                err.status = 404;
                return next(err);
            }
            console.log(results.ability);
            // console.log(results.ability.name);
            // console.log(results.ability.desc);

            // Successful, so render.
            res.render("ability-detail", {
                // name: results.ability.name,
                // desc: results.ability.name
                ability: results.ability
            })
        }
    )

}
// Display detail page for a specific book.
// exports.book_detail = (req, res, next) => {
//     async.parallel(
//       {
//         book(callback) {
//           Book.findById(req.params.id)
//             .populate("author")
//             .populate("genre")
//             .exec(callback);
//         },
//         book_instance(callback) {
//           BookInstance.find({ book: req.params.id }).exec(callback);
//         },
//       },
//       (err, results) => {
//         if (err) {
//           return next(err);
//         }
//         if (results.book == null) {
//           // No results.
//           const err = new Error("Book not found");
//           err.status = 404;
//           return next(err);
//         }
//         // Successful, so render.
//         res.render("book_detail", {
//           title: results.book.title,
//           book: results.book,
//           book_instances: results.book_instance,
//         });
//       }
//     );
//   };
  



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



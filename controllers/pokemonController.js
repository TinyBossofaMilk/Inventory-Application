// var Book = require('../models/book');
// var Author = require('../models/author');
// var Genre = require('../models/genre');
// var BookInstance = require('../models/bookinstance');

const Pokemon = require('../models/pokemon');
const Type = require('../models/type');
const Ability = require('../models/abilities');

const { body, validationResult } = require("express-validator");

var async = require('async');

// home page
exports.index = function(req, res) {
    res.send("not yet implemented")
};

// pokemon search page
exports.pokemon_search_get = (req, res) => {
    res.send("not yet implemented")
};

//view specific pokemon deets
exports.pokemon_get = (req, res) => {
    res.send("not yet implemented")
};

//GET add pokemon to the archive
exports.pokemon_create_get = (req, res) => {
    res.send("not yet implemented")
};

//POST add pokemon to the archive
exports.pokemon_create_post = (req, res) => {
    res.send("not yet implemented")
};

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
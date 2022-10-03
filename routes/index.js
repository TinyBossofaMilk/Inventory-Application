var express = require('express');
var router = express.Router();

// Require our controllers.
var pokemon_controller = require('../controllers/pokemonController');
var ability_controller = require('../controllers/abilityController');
var type_controller = require('../controllers/typeController.js');


/* GET home page. */
router.get('/', pokemon_controller.index);



/* TYPES */

/* GET type list page */
router.get('/type-list', type_controller.types_list);



/* ABILITY */

/* GET ability list page */
router.get('/ability-list', ability_controller.ability_list_get);

// GET create ability page
router.get('/ability/create', ability_controller.ability_create_get);

// POST create ability page
router.post('/ability/create', ability_controller.ability_create_post);

/* GET ability details page */
router.get('/ability/:id', ability_controller.ability_detail_get)

/* GET update ability details */
router.get('/ability/:id/update', ability_controller.ability_update_get)

/* POST update ability details */
router.post('/ability/:id/update', ability_controller.ability_update_post)

/* GET delete ability confirmation */
router.get('/ability/:id/delete', ability_controller.ability_delete_get)

/* POST delete ability confirmation */
router.post('/ability/:id/delete', ability_controller.ability_delete_post)


/* POKEMON */

/* GET search page */
router.get('/pkmn/search', pokemon_controller.pokemon_search_get);

// GET create Pokemon page
router.get('/pkmn/create', pokemon_controller.pokemon_create_get);

// POST create Pokemon page
router.post('/pkmn/create', pokemon_controller.pokemon_create_post);

// GET pokemon profile
router.get('/pkmn/:id/profile', pokemon_controller.pokemon_get);

// POST pokemon profile
router.post('/pkmn/:id/profile', pokemon_controller.pokemon_update_post);

// POST delete pokemon
router.post('/pkmn/:id/profile', pokemon_controller.pokemon_update_post);




// // GET catalog home page.
// router.get('/', book_controller.index);  

// // GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
// router.get('/book/create', book_controller.book_create_get);

// // POST request for creating Book.
// router.post('/book/create', book_controller.book_create_post);

// // GET request to delete Book.
// router.get('/book/:id/delete', book_controller.book_delete_get);

module.exports = router;
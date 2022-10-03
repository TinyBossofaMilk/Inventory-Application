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
router.get('/pkmn/:id', pokemon_controller.pokemon_get);

// POST pokemon profile
router.post('/pkmn/:id', pokemon_controller.pokemon_update_post);

// GET pokemon update
router.get('/pkmn/:id/update', pokemon_controller.pokemon_update_get);

// POST pokemon update
router.post('/pkmn/:id/update', pokemon_controller.pokemon_update_post);

// GET delete pokemon
router.get('/pkmn/:id/delete', pokemon_controller.pokemon_delete_get);

// POST delete pokemon
router.post('/pkmn/:id/delete', pokemon_controller.pokemon_delete_post);


module.exports = router;
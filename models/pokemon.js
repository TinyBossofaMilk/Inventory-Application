const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PokemonSchema = new Schema({
    name: {type: String},
    type: {type: Schema.ObjectID, ref:'type'},
    evolvesFrom: {type: Schema.ObjectID, ref: 'pokemon'},
    evolvesTo: {type: Schema.ObjectID, ref: 'pokemon'},
    desc: {type: String},
    ability: {type: Schema.ObjectID, ref:'ability'},

    height: {type: Number, min: 0},
    weight: {type: Number, min: 0}
});

PokemonSchema
.virtual('url')
.get(function () {
    return '/catalog/pkmn-detail/'
});

// Export model.
module.exports = mongoose.model('Pokemon', PokemonSchema);
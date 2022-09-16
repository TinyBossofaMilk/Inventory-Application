var mongoose = require('mongoose');

const type = require('./type')
const ability = require('./ability')

var Schema = mongoose.Schema;

var PokemonSchema = new Schema({
    name: {type: String},
    type: [{type: Schema.ObjectId, ref:'type'}],
    ability: {type: Schema.ObjectId, ref:'ability'},
    evolvesFrom: {type: Schema.ObjectId, ref: 'pokemon'},
    evolvesTo: {type: Schema.ObjectId, ref: 'pokemon'},
    desc: {type: String},

    height: {type: Number, min: 0},
    weight: {type: Number, min: 0}
});

PokemonSchema
.virtual('url')
.get(function () {
    return '/catalog/pkmn-detail'
});

// Export model.
module.exports = mongoose.model('Pokemon', PokemonSchema);
var mongoose = require('mongoose');

const type = require('./type')
const ability = require('./ability')

var Schema = mongoose.Schema;

var PokemonSchema = new Schema({
    name: {type: String},
    type: {type: Schema.Types.ObjectID, ref:'type'},
    evolvesFrom: {type: Schema.Types.ObjectID, ref: 'pokemon'},
    evolvesTo: {type: Schema.Types.ObjectID, ref: 'pokemon'},
    desc: {type: String},
    ability: {type: Schema.Types.ObjectID, ref:'ability'},

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
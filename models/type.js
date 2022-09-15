var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const PKMNTYPES=[
    'Normal', 'Fire', 'Water', 'Grass',
    'Electric',
    'Ice',
    'Fighting',
    'Poison',
    'Ground',
    'Flying',
    'Psychic',
    'Bug',
    'Rock',
    'Ghost',
    'Dark',
    'Dragon',
    'Steel',
    'Fairy'];

var TypeSchema = new Schema({
    name: {type: String, enum: PKMNTYPES},
    matchups: [{type: Schema.ObjectId, ref: 'type'}],
})

TypeSchema
.virtual('url')
.get(function () {
    return '/types/';
});

module.exports = mongoose.model('Type', TypeSchema);
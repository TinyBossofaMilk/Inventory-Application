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
    strengths: [{type: String, enum: PKMNTYPES}],
    weaknesses: [{type: String, enum: PKMNTYPES}],
    immune: [{type: String, enum: PKMNTYPES}]
})

TypeSchema
.virtual('url')
.get(function () {
    return '/types';
});

module.exports = mongoose.model('Type', TypeSchema);
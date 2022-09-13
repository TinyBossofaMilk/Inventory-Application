var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AbilitySchema = new Schema({
    name: {type: String, enum: PKMNTYPES},
    strengths: [{type: Schema.ObjectID, ref: 'type'}],
    weaknesses: [{type: Schema.ObjectID, ref: 'type'}]
});

AbilitySchema
.virtual('url')
.get(function () {
    return '/abilities/';
});

module.exports = mongoose.model('Ability', AbilitySchema);
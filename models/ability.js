var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AbilitySchema = new Schema({
    name: {type: String},
    desc: {type: String}
});

AbilitySchema
.virtual('url')
.get(function () {
    return '/ability/' + this._id;
});

module.exports = mongoose.model('Ability', AbilitySchema);
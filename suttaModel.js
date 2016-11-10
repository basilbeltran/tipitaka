var mongoose = require('mongoose');

var suttaSchema = mongoose.Schema({
  PTS:String,
  code: {type: String, required:true},
  paliUrl: String,
  engUrl: {type: String, required:true},
  pitaka: {type: String},
  nikaya:String,
  vagga:String,
  nipata:String,
  suttaNamePali:{type: String},
  suttaNameEng:{type: String},
  created:{type:Number, default: ()=> Date.now()}
});

module.exports = mongoose.model('Sutta', suttaSchema, 'suttas');
// db.heroes

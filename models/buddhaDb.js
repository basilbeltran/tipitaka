
var mongoose = require('mongoose');

//db.suttas.insert({PTS:'M i 1', pitaka:'Sutta', nikaya:'Majjhima', vagga:'', suttaPali:'Mulapariyaya',
    // suttaEng:'The Root Sequence', SA:'AN 10.58', SAU:'http:'})

    var suttaSchema = mongoose.Schema({
      PTS:String,
      code:{type: String, required:true},
      paliUrl:String,
      engUrl:{type: String, required:true},
      pitaka:{type: String},
      nikaya:String,
      vagga:String,
      nipata:String,
      suttaNamePali:{type: String},
      suttaNameEng:{type: String},
      created:{type:Number, default: ()=> Date.now()}
    });

var Sutta = mongoose.model('Sutta', suttaSchema);

function createSutta(attributes){
  var sutta = new Sutta(attributes);
  sutta.save( (err,doc) =>{
    if(err){
      console.log("createSutta err " + err);
    }
    else{
      console.log("added doc ");
    }
  });
}

createSutta({
  PTS:"",
  code:"Khp 1",
  paliUrl:"",
  engUrl:"http://www.accesstoinsight.org/tipitaka/kn/khp/khp.1-9.than.html#khp-1",
  engTrans:"Thanissaro",
  pitaka:"Sutta",
  nikaya:"Khuddaka",
  nipata:"",
  vagga:"Khuddakapatha",
  suttaNamePali: "Saranagamana",
  suttaNameEng:"Going for Refuge"
});

function getSuttas(query){
  Sutta.find(query || {}, (err, sutta)=>{
    if(err){
      console.log("getSuttas error " + err);
    }
    else{
      console.log("ADDED Sutta: " + sutta );
    }
  })
};

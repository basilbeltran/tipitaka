//var hdfsmy = require('./client.js');
var kendpoint = 'http://kanyerest.xyz/api';
var endpoint = 'http://localhost:50070/webhdfs/v1/user/basilbeltran'
var request = require('request');


module.exports = {
    test: (req, res) => {
      console.log("Getting almostFixedJson");
        request(`${endpoint}/dn1.out/part-00000?op=OPEN`, (err, response, body) => {
          // fixed json will be the string minus the last comma
          var almostFixedJson = body.slice(0, body.length-4); // why 4 I dont know
          var fixedJson = almostFixedJson + "}";
          var words = JSON.parse(fixedJson);

          var arr = [];
            for(prop in words) {
                arr.push({
                    word: prop,
                    count: words[prop]
                });
            }
            //console.log("Array: ", arr);

            res.send(arr);
        });
    },


    allWords: (req, res) => {
      request(`${kendpoint}/counter`, (err, response, body) =>{

           res.send(body);
      });
    }
}

//var hdfsmy = require('./client.js');
var kendpoint = 'http://kanyerest.xyz/api';
var endpoint = 'http://localhost:50070/webhdfs/v1/user/basilbeltran'
var request = require('request');


module.exports = {
    test: (req, res) => {
      console.log("Getting all words");
        request(`${endpoint}/dn.out/part-00000?op=OPEN`, (err, response, body) => {
          var words = JSON.parse(body);
          console.log("err: ", err);
          console.log(words);

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

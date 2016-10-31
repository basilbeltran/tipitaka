//var hdfsmy = require('./client.js');
var kendpoint = 'http://kanyerest.xyz/api';
var endpoint = 'http://localhost:50070/webhdfs/v1/user/basilbeltran'
var request = require('request');


module.exports = {
    allWordsArray: (req, res) => {

        request(`${endpoint}/dn1.out/part-00000?op=OPEN`, (err, response, body) => {
          // fixed json will be the string minus the last comma
          var almostFixedJson = body.slice(0, body.length-4); // cr lf ?
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

    allWordsJSON: (req, res) => {
      var testFile = "/dn1.out/part-00000?op=OPEN"
      request(`${endpoint}${testFile}`, (err, response, body) =>{
        console.log(`Endpoint: ${endpoint} \n ${testFile} `);
           res.send(body);
      });
    },

    allWordstext: (req, res) => {
      var testFile = "/dn1.out/part-00000?op=OPEN"
      request(`${endpoint}${testFile}`, (err, response, body) =>{
        console.log(`Endpoint: ${endpoint} \n ${testFile} `);
           res.send(body);
      });
    },

    hdfsweb: (req, res) => {
      var testFile = "/dn1.out/part-00000?op=OPEN"
      request(`${endpoint}${testFile}`, (err, response, body) =>{
        console.log(`Endpoint: ${endpoint} \n ${testFile} `);
           res.send(body);
      });
    }
}

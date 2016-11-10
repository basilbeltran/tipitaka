var request = require('request');

var endpoint = 'http://localhost:50070/webhdfs/v1/user/basilbeltran'
var testFile = "/dn1.out/part-00000?op=OPEN"
// var gtEndpoint = 'https://www.googleapis.com/language/translate/v2?key=AIzaSyCLGUGn7uSe2i1oeNaxH9Mur6TM0uJ1jh8';

// var gtTest = "&q=hello%20world&source=en&target=es"
// var gtWord = "&q=dog";
// var gtSource = "&source=en";
// var gtTarget = "&source=en";


module.exports = {

// read file into an array
    allWordsArray: (req, res) => {
        request(`${endpoint}${testFile}`, (err, response, body) => {
            // fixed json will be the string minus the last comma
            var almostFixedJson = body.slice(0, body.length - 4); // cr lf ?
            var fixedJson = almostFixedJson + "}";
            var words = JSON.parse(fixedJson);

            var arr = [];
            for (prop in words) {
                arr.push({
                    word: prop,
                    count: words[prop]
                });
            }
            //console.log("Array: ", arr);
            res.send(arr);
        });
    },

// query testfile, mangle out JSON and send result 'body' RESPONSE
    allWordsJSON: (req, res) => {
      request(`${endpoint}${testFile}`, (err, response, body) =>{
        // fixed json will be the string minus the last comma
        var almostFixedJson = body.slice(0, body.length-4); // cr lf ?
        var fixedJson = almostFixedJson + "}";
        var words = JSON.parse(fixedJson);
        res.send(words);
      });
    },

// query hadoop hdfs file system for testfile, send result 'body' RESPONSE
    allWordstext: (req, res) => {
      request(`${endpoint}${testFile}`, (err, response, body) =>{
        res.send(body);
      });
    },

// query hadoop hdfs file system for directory listing of endpoint
    webHdfsTest: (req, res) => {
      request(`${endpoint}?op=LISTSTATUS`, (err, response, body) =>{
        res.send(body);
      });
    },

    gtTest: (req, res) => {
      request(`${gtEndpoint}${gtWord}${gtSource}${gtTarget}`, (err, response, body) =>{
        res.send(body);
      });
    }

}

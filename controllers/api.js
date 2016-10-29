//var hdfsmy = require('./client.js');
//var endpoint = 'http://kanyerest.xyz/api';
var endpoint = 'http://localhost:50070/webhdfs/v1/user/basilbeltran'
var request = require('request');


module.exports = {
    counter: (req, res) => {
        request(`${endpoint}/counter`, (err, response, body) => {
            //console.log("Body: ", body); // why body not response?
            var words = JSON.parse(body);

            var arr = [];
            for(prop in words) {
                arr.push({
                    word: prop,
                    count: words[prop]
                });
            }
            //console.log("Array: ", arr);

            res.send({
                error: err,
                response: response,
                body: arr,
            });
        });
    },
    album: (req, res) => {
        request(`${endpoint}/album/${req.query.album}`, (err, response, body) => {
            res.send({
                error: err,
                response: response,
                body: body,
            });
        })
    },
    track: function getTrack(req, res) {
        request(`${endpoint}/track/${req.query.track}`, (err, response, body) =>{
             res.send({
                error: err,
                response: response,
                body: body,
            });
        });
    },
    allWords: (req, res) => {
      request(`${endpoint}/dn.out/part-00000?op=OPEN`, (err, response, body) =>{
        console.log("Body: ", body);
           res.send(body);
      });
    }
}

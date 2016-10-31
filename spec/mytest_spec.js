// var Tapreporter = require("jasmine-tapreporter");
// var jasmine = require("jasmine-node");

var request = require("request");
var baseUrl = "http://localhost:40000/";
var apiUrl = baseUrl+ "/api/buddha/";
var endpointUrl ='http://localhost:50070/webhdfs/v1/user/basilbeltran'

describe("BuddhaNode Server Tests", () => {
 describe("GET server route /", () => {

    it("returns status 200", (done) => {
      request.get(baseUrl, (err, res, body) =>{
        expect(res.statusCode).toEqual(200);
        done();
      });
    });

   it("returns something", (done) => {
     request.get(baseUrl, function(error, response, body) {
       expect(body).not.toBe(null);
       done();
    });
  });

  it("returns Buddha says", (done) => {
    request.get(baseUrl, function(error, response, body) {
      expect(body).toBe("Buddha says...");
      done();
   });
 });

 it("returns content", (done) => {
   request.get(`${apiUrl}hdfsweb`, function(error, response, body) {
     //expect to be able to access hdfs via REST API
     done();
  });
});

it("returns text", (done) => {
  request.get(`${apiUrl}allWordstext`, function(error, response, body) {
    //expect to get text
    done();
 });
});

it("returns parsable JSON", (done) => {
  request.get(`${apiUrl}allWordsJSON`, function(error, response, body) {
    //expect to get
    done();
 });
});

it("returns a javascript array", (done) => {
  request.get(`${apiUrl}allWordsArray`, function(error, response, body) {
    //expect to get
    done();
 });
});

/////////////////////////////////////////////////////
 });   // describe
});   // describe


// not working
// jasmine.getEnv().addReporter( new Tapreporter() );
// jasmine.getEnv().execute();

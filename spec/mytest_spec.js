// var Tapreporter = require("jasmine-tapreporter");
// var jasmine = require("jasmine-node");

var request = require("request");
var baseUrl = "http://localhost:40000/";
var apiUrl = baseUrl+ "api/buddha/";

describe("BuddhaNode Server Tests", () => {
 describe("GET server route /", () => {

    it("should return status 200", (done) => {
      request.get(baseUrl, (error, response, body) =>{
        expect(response.statusCode).toEqual(200);
        done();
      });
    });

   it("should return something", (done) => {
     request.get(baseUrl, function(error, response, body) {
       expect(body).not.toBe(null);
       done();
    });
  });

  it("should return Buddha says", (done) => {
    request.get(baseUrl, function(error, response, body) {
      expect(body).toBe("Buddha says...");
      done();
   });
 });

 it("should return status 200", (done) => {
   request.get(apiUrl +"webHdfsTest", function(error, response, body) {
     expect(response.statusCode).toEqual(200);
     done();
  });
});

// it("returns parsable JSON", (done) => {
//   request.get(`${apiUrl}allWordsJSON`, function(error, response, body) {
//     var parseIt = function(){
//       JSON.parse(body);
//     }
//     expect(parseIt).not.toThrow();
//     done();
//  });
// });
//
// it("returns a javascript array", (done) => {
//   request.get(`${apiUrl}allWordsArray`, function(error, response, body) {
//     expect(Array.isArray(body)).toBe(true);
//     done();
//  });
// });

/////////////////////////////////////////////////////
 });   // describe
});   // describe


// not working
// jasmine.getEnv().addReporter( new Tapreporter() );
// jasmine.getEnv().execute();

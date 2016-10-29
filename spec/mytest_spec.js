var request = require("request");
var baseUrl = "http://localhost:40000/";

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
    }); //  expectation
  });  //  it

  it("returns Hello World", (done) => {
    request.get(baseUrl, function(error, response, body) {
      expect(body).toBe("Buddha says...");
      done();
   }); //  expectation
 });  //  it

 });   // describe
});   // describe

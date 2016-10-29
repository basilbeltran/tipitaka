
var hdfsweb = require('./controllers/api.js');


module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send("Buddha says...");
    });

    app.get('/api/buddha/counter', hdfsweb.counter);
    app.get('/api/buddha/allWords', hdfsweb.allWords);
}

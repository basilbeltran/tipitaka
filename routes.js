
var hdfsweb = require('./controllers/webhdfs.js');


module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send("Buddha says...");
    });


    app.get('/api/buddha/allWordsArray', hdfsweb.allWordsArray);
    app.get('/api/buddha/allWordsJSON', hdfsweb.allWordsJSON);
    app.get('/api/buddha/allWordsJSON', hdfsweb.allWordstext);
    app.get('/api/buddha/webHdfsTest', hdfsweb.hdfsweb);
}

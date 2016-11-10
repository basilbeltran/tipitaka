var hdfsH = require('./controllers/hdfsHandlers.js');
var heroH = require('./controllers/heroHandlers.js');
var countries = require('./models/countries.json'); // how json can be directly read from a file


module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send("Buddha says...");
    });

    app.get('/api/buddha/allWordsArray', hdfsH.allWordsArray);
    app.get('/api/buddha/allWordsJSON', hdfsH.allWordsJSON);
    app.get('/api/buddha/allWordstext', hdfsH.allWordstext);
    app.get('/api/buddha/webHdfsTest', hdfsH.webHdfsTest);

//http methods are the verbs

    app.get('/', (req, res)=>{
        res.sendFile('index.html', {root : './public/html'})
    });

    // app.post('/api/heroes', heroH.create);
    // app.get('/api/heroes' , heroH.get );
    // app.get('/api/heroes/:id', heroH.get);  // can use query param OR unique URL w/ dynamic routes or parametarized routes

// this shows that the above skinny routes just organize these code blocks
    // app.post('/api/countries', (req, res) => {
    //     console.log("Body : ", req.body);
    //     // Add a bear to TheBearHouse
    //     // TheBearHouse.push({
    //     //     name: req.body.name,
    //     //     accessories: req.body.accessories.split(', '),
    //     //     stuffedness: +req.body.stuffedness
    //     // });
    //
    //     // Send a response down
    //     res.send(countries);
    // });


} //exports

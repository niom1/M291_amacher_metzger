/*
Multipurpose Server
 */

let express = require("express");
let app     = express();
const port = process.env.PORT || 3000;

const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes


const fs = require('fs');
const path = require('path');


const staticPath = './data/';

const cors = require("cors");
let corsOptions = {
    origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/test', (req, res) => {
    let fileLoc = path.resolve(staticPath+'test.txt');
    fs.readFile(fileLoc, 'utf8',
        (err, text) => {
            res.send(text);
    });
});

app.get('/v*/products', (req, res) => {
    
    let fileLoc = path.resolve(staticPath+'products-1.json');
    if (req.url === '/v2/products'){
        fileLoc = path.resolve(staticPath+'products-2.json');
    }
    fs.readFile(fileLoc, 'utf8', (error, text) => {
        if (error) {
            console.error(`Fehler und hier die Fehlermeldung: ${error}`);
            res.send(`Ein Fehler ist passiert! Benachrichtigen Sie den Admin.`);
        } else {
            try {
                console.log(text);
                res.send(text);
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });
});

var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'))

const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// Loading the config.js file
var configBuffer = fs.readFileSync(path.join(__dirname , 'config.json'));
var CONFIG = JSON.parse(configBuffer);

// Loading the wiki.json file
var wikiBuffer = fs.readFileSync(path.join(__dirname, 'wiki.json'));
var WIKI = JSON.parse(wikiBuffer);

app.get('/', function(req, res){ 
    res.render('index', {
        main: CONFIG.main,
        navigation: CONFIG.navigation,
        wiki: CONFIG.wiki,
        wikiContents: WIKI
    });
});
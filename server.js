var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');
var showdown  = require('showdown');
var mdConverter = new showdown.Converter();

// app.use('/', express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/public'));

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

/* CONSTANTS */

const DEFAULT_FOLDER_LOCATION = CONFIG.wiki.defaultfolder;

/* END OF CONSTANTS */

var WikiFileToLocationRef = {};

WIKI.items.forEach(item => {
    WikiFileToLocationRef[item.url] = item.filelocation

    if (item.subitems != undefined){
        item.subitems.forEach(subitem => {
            WikiFileToLocationRef[subitem.url] = subitem.filelocation;
        });
    }
});

app.get('/', function(req, res){ 
    res.render('index', {
        main: CONFIG.main,
        navigation: CONFIG.navigation,
        wiki: CONFIG.wiki,
        wikiContents: WIKI,
        content: CONFIG.content,
        footer: CONFIG.footer,
        pageContent: "Click on any of the links"
    });
});

app.get('/' + DEFAULT_FOLDER_LOCATION + '/:url', function(req, res){

    if (WikiFileToLocationRef[req.params.url] != undefined){

        let fileLocation = path.join(__dirname, DEFAULT_FOLDER_LOCATION, WikiFileToLocationRef[req.params.url]);

        fs.readFile(fileLocation , 'utf8', function(err, content){
            if (err){
                console.log("File not found: " + fileLocation);
                res.sendStatus(404);
            }
            else{
                let htmlContent = mdConverter.makeHtml(content);

                res.render('index', {
                    main: CONFIG.main,
                    navigation: CONFIG.navigation,
                    wiki: CONFIG.wiki,
                    wikiContents: WIKI,
                    content: CONFIG.content,
                    footer: CONFIG.footer,

                    pageContent: htmlContent
                });
            }
        });
    }
    else{
        console.log("Page not found: " + req.params.url);
        res.sendStatus(404);
    }

})

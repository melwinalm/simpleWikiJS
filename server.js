var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
var showdown = require('showdown');
var mdConverter = new showdown.Converter();
var chalk = require('chalk');

// app.use('/', express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'))

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(chalk.blue(`App listening on port ${port}!`)));

// Loading the config.js file
var configBuffer = fs.readFileSync(path.join(__dirname, 'config.json'));
var CONFIG = JSON.parse(configBuffer);

// Loading the wiki.json file
var wikiBuffer = fs.readFileSync(path.join(__dirname, 'wiki.json'));
var WIKI = JSON.parse(wikiBuffer);

/* CONSTANTS */

const DEFAULT_FOLDER_LOCATION = CONFIG.wiki.defaultfolder;
const HOME_PAGE_LOCATION = '/' + DEFAULT_FOLDER_LOCATION + '/' + WIKI.homepageurl;

/* END OF CONSTANTS */

var WikiFileToLocationRef = {};

WIKI.items.forEach(item => {
    WikiFileToLocationRef[item.url] = item;

    if (item.subitems != undefined) {
        item.subitems.forEach(subitem => {
            WikiFileToLocationRef[subitem.url] = subitem
        });
    }
});

app.get('/', function (req, res) {
    res.redirect(HOME_PAGE_LOCATION);
});

app.get('/' + DEFAULT_FOLDER_LOCATION + '/:url', function (req, res) {
    if (WikiFileToLocationRef[req.params.url] != undefined) {

            let fileLocation = path.join(__dirname, DEFAULT_FOLDER_LOCATION, WikiFileToLocationRef[req.params.url].filelocation);

            fs.readFile(fileLocation, 'utf8', function (err, content) {
                if (err) {
                    console.log(chalk.red("File not found: " + fileLocation));
                    res.sendStatus(404);
                }
                else {
                    let htmlContent = mdConverter.makeHtml(content);

                    res.render('index', {
                        main: CONFIG.main,
                        navigation: CONFIG.navigation,
                        wiki: CONFIG.wiki,
                        wikiContents: WIKI,
                        content: CONFIG.content,
                        footer: CONFIG.footer,
                        pageTitle: WikiFileToLocationRef[req.params.url].title,
                        pageContent: htmlContent
                    });
                }
            });
        }
    else {
        res.render('404', {
            defaultfolder: CONFIG.wiki.defaultfolder,
            homepageurl: WIKI.homepageurl,
            navigation: CONFIG.navigation,
            footer: CONFIG.footer
        })
        console.log(chalk.red("Page not found: " + req.url));
    }
})

app.all('/*', function(req, res){
    res.render('404', {
        defaultfolder: CONFIG.wiki.defaultfolder,
        homepageurl: WIKI.homepageurl,
        navigation: CONFIG.navigation,
        footer: CONFIG.footer
    })
    console.log(chalk.red("Route not found: " + req.url));
})

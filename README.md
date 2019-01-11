# Simple Wiki JS

An easy to use configurable wiki site generator.

## Getting Started

#### Using git

- Use the command `git clone https://github.com/melwinalm/simpleWikiJS.git` to create a copy of the repo on your local machine.

- Once the repo is cloned to use the command `npm install` to install all the npm packages.

- Once the packages are download use `nodemon start` to start the local server.

- This should open `localhost:3000` in your browser

#### Using npm 

This is currently not released as a npm package

## Customizing for your purpose

Following json files are used to customize the data displayed in the page -

#### `config.json`

- Main Settings

'''
"main": {
        "title": "Simple Wiki JS Documentation",
        "subtitle": "",
        "description": "For seo purpose",
        "font": "",
        "defaultLanguage": "en",
        "themecolor": "#ff6600"
    },
'''

`title` - Title of the page. This will remain same in every page, even when you navigate to other pages.
`subtitle` - This will used for SEO optimization purpose. Yet to be implemented.
`description` - Yet to be implemented.
`font` - Allows you to customize the page with different fonts. Yet to be implemented.
`defaultlanguage` - Metadata purpose. This is used so that the browser can understand which is the language used in the page, so that it can offer google translations to the user. Yet to be implemented.
`themecolor` - This color defines the theme of the page, also it is used to set the tab color (Only in Chrome for Android).
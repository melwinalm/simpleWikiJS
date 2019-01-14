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

#### config.json

- Main Settings

```json
"main": {
        "title": "Simple Wiki JS Documentation",
        "subtitle": "",
        "description": "For seo purpose",
        "font": "",
        "defaultLanguage": "en",
        "themecolor": "#ff6600"
    },
```

`title` - Title of the page. This will remain same in every page, even when you navigate to other pages.

`subtitle` - This will used for SEO optimization purpose. Yet to be implemented.

`description` - Yet to be implemented.

`font` - Allows you to customize the page with different fonts. Yet to be implemented.

`defaultlanguage` - Metadata purpose. This is used so that the browser can understand which is the language used in the page, so that it can offer google translations to the user. Yet to be implemented.

`themecolor` - This color defines the theme of the page, also it is used to set the tab color (Only in Chrome for Android).

- Navigation Settings

```json
"navigation": {
        "title": "Simple Wiki JS",
        "items": [
            {"title": "HOME", "url": "/"},
            {"title": "API", "url": "/api"},
            {"title": "DOCS", "url": "/docs"},
            {"title": "SUPPORT", "url": "/support"},
            {"title": "INSTALL", "url": "/install"},
            {"title": "GITHUB", "url": "https://github.com/melwinalm/simplewikijs"}
        ],

        "icon": "yet to be done",
        "template": "navigation/navigation.ejs",
        "sticky": false
    },
```

`title` - Text to be displayed in the navigation bar

`items` - This is an array of objects, each object containing information about navigation item.

`title` - Text to be displayed for the navigation item.

`url` - Navigation link when the navigation item is clicked.

`icon` - Icon for the navigation item. Yet to be implemented.

`template` - Specifies the design template for navigation bar. Customize existing ones or create new ones in this folder  - `\templates\navigation\`.

`sticky` - Set it to `true`, if you want the navigation bar to be fixed on the top of page, even when the page is scrolled. Yet to implemented.

- Wiki Settings

```json
"wiki": {
        "template": "wiki/wiki.ejs",
        "defaultfolder": "pages"
    },
```

`template`- Specifies the design template for wiki navigation. Customize existing ones or create new ones in this folder  - `\templates\wiki\`.

`defaultfolder` - Specifies the folder location where the content(MD and HTML) files are available.

- Content Settings

```json
"content": {
        "template": "content/content.ejs"
    },
```

`template` - Specifies the design template for content part. Customize existing ones or create new ones in this folder  - `\templates\content\`.

- Footer Settings

```json
"footer":{
        "template": "footer/footer.ejs"
    }
```

`template` - Specifies the design template for footer navigation. Customize existing ones or create new ones in this folder  - `\templates\footer\`.

- Alert Settings

```json
"alert": {
        "isshown": true,
        "type": "info",
        "message": "A new version of simpleWikiJS will be releasing in the upcoming months"
    }
```

`isshown` - Alert will be displayed in the page if this value is set to true

`type` - This defines the theme of the alert. Values like - info, important, warning can be used

`message` - The message to be shown in the page

#### wiki.json

```json
    "homepageurl": "getting-started"
```

`homepageurl` - Specifies the default page url of the site. The value of this key should always be be part of items array in wiki.json file.

```json
"items": [
        {
            "title": "Getting Started",
            "url": "getting-started",
            "filelocation": "getting-started.md",
            "subitems": [
                {
                    "title": "Installation",
                    "url": "installation",
                    "filelocation": "installation.md"
                },
```

`items` and `subitems` - Should be an array of objects. This defines the structure of wiki navigation present on the top-left of every page.

`title` - Title of display name of the page.

`url` - Any random string can be used here. This string will be used in the url bar on navigating to this item page. This url value is used in the `homepageurl` key discussed above.

`filelocation` - name of the markdown file, to be rendered on the page.

#### Customizing 404 page

- Navigate to `templates` folder location and modify the 404.ejs file to customize the 404 page.
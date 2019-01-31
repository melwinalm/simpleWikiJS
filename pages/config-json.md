This file defines the properties, templates and navigation information about the site.

Follow the following rules to edit config.json file.

- Main Settings

![main settings image](../assets/main-settings.png)

```json
"main": {
        "title": "Simple Wiki JS Documentation",
    },
```

`title` - Title of the page. This will remain same in every page, even when you navigate to other pages.

- Navigation Settings

![navigation settings image](../assets/navigation-settings-1.png)

![navigation settings image](../assets/navigation-settings-2.png)

```json
"navigation": {
        "title": "Simple Wiki JS",
        "items": [
            {"title": "HOME", "url": "/"},
            {"title": "NPM", "url": "https://npmjs.com/package/simplewikijs"},
            {"title": "ISSUES", "url": "https://github.com/melwinalm/simplewikijs/issues"},
            {"title": "GITHUB", "url": "https://github.com/melwinalm/simplewikijs"}
        ],
        "template": "navigation/navigation.ejs"
    },
```

`title` - Text to be displayed in the navigation bar.

`items` - This is an array of objects, each object containing information about navigation item.

`template` - Specifies the design template for navigation bar. Customize existing ones or create new ones in this folder  - `\templates\navigation\`.

`title` - Text to be displayed for the navigation item.

`url` - URL of the navigation item.

- Wiki Settings

```json
"wiki": {
        "template": "wiki/wiki.ejs",
        "defaultfolder": "pages"
    },
```

`template`- Specifies the design template for wiki navigation. Customize existing ones or create new ones in this folder  - `\templates\wiki\`.

`defaultfolder` - Specifies the folder location where the content(MD) files are available.

- Content Settings

```json
"content": {
        "template": "content/content.ejs"
    },
```

`template` - Specifies the design template for content part. Customize existing ones or create new ones in this folder  - `\templates\content\`.
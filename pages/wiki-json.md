This file defines the left navigation of the page. See the below image.

![wiki.json image](../assets/wiki-json.png)

Follow the following rules to edit wiki.json file.

```json
{
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
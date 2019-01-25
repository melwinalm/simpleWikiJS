var Ajv = require('ajv');
var ajv = new Ajv();

var schemaWiki = {
    type: "object",
    properties: {
        "homepageurl": {
            type: "string",
            minLength: 1,
            pattern: "^[a-zA-Z0-9_-]*$"
        },
        "items": {
            type: "array",
            minItems: 1,
            items: {
                type: "object",
                properties: {
                    "title": {
                        type: "string",
                        minLength: 1,
                    },
                    "url": {
                        type: "string",
                        minLength: 1,
                        pattern: "^[a-zA-Z0-9_-]*$"
                    },
                    "filelocation": {
                        type: "string",
                        minLength: 4,
                        pattern: "^[a-zA-Z0-9._-]*$"
                    },
                    "subitems": {
                        type: "array",
                        minItems: 1,
                        items: {
                            type: "object",
                            properties: {
                                "title": {
                                    type: "string",
                                    minLength: 1,
                                },
                                "url": {
                                    type: "string",
                                    minLength: 1,
                                    pattern: "^[a-zA-Z0-9_-]*$"
                                },
                                "filelocation": {
                                    type: "string",
                                    minLength: 4,
                                    pattern: "^[a-zA-Z0-9._-]*$"
                                }
                            },
                            required: ["title", "url", "filelocation"]
                        }
                    }
                },
                required: ["title", "url", "filelocation"]
            }
        }
    },
    required: ["homepageurl", "items"]
};

var dataWiki = require('./wiki.json');

var validateWiki = ajv.validate(schemaWiki, dataWiki);
if (!validateWiki) {
    console.log("wiki.json: Following errors were found during JSON Schema validation");
    ajv.errors.forEach(function (value) {
        console.log(`- Data Path: ${value.dataPath} Message: ${value.message}`);
    })
}
else{
    console.log("wiki.json: No errors were found in the schema");
}



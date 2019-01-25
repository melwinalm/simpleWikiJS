var Ajv = require('ajv');
var ajv = new Ajv();

var schema = {
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

var data = require('./wiki.json');

var validateWiki = ajv.validate(schema, data);
if (!validateWiki) console.log(ajv.errors);

var Ajv = require('ajv');
var ajv = new Ajv();
var chalk = require('chalk');

// Validating wiki.json file
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
    console.log(chalk.red("wiki.json: Following errors were found during JSON Schema validation"));
    ajv.errors.forEach(function (value) {
        console.log(chalk.red(`- Data Path: ${value.dataPath} Message: ${value.message}`));
    })
}
else {
    console.log(chalk.green("wiki.json: No errors were found in the schema"));
}

// Validating config.json file
var schemaConfig = {
    type: "object",
    properties: {
        "main": {
            type: "object",
            properties: {
                "title": {
                    type: "string",
                    minLength: 1,
                }
            }
        },
        "navigation": {
            type: "object",
            properties: {
                "title": {
                    type: "string",
                    minLength: 1,
                },
                "items": {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            "title": {
                                type: "string",
                                minLength: 1
                            },
                            "url": {
                                type: "string",
                                minLength: 1,
                            }
                        }
                    }
                },
                "template": {
                    type: "string",
                    pattern: "navigation/"
                }
            }
        },
        "wiki": {
            type: "object",
            properties: {
                "template": {
                    type: "string",
                    pattern: "wiki/"
                },
                "defaultfolder": {
                    type: "string",
                    minLength: 1,
                }
            }
        },
        "content": {
            type: "object",
            properties: {
                "template": {
                    type: "string",
                    pattern: "content/"
                }
            }
        },
        "footer": {
            type: "object",
            properties: {
                "template": {
                    type: "string",
                    pattern: "footer/"
                }
            }
        },
    }
}

var dataConfig = require('./config.json');

var validateConfig = ajv.validate(schemaConfig, dataConfig);
if (!validateConfig) {
    console.log(chalk.red("config.json: Following errors were found during JSON Schema validation"));
    ajv.errors.forEach(function (value) {
        console.log(chalk.red(`- Data Path: ${value.dataPath} Message: ${value.message}`));
    })
}
else {
    console.log(chalk.green("config.json: No errors were found in the schema"));
}
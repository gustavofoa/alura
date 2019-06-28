var express = require('express')
    , consign = require('consign')
    , bodyParser = require('body-parser')
    , expressValidator = require('express-validator')
    , morgan = require('morgan')
    , logger = require('../services/logger.js');


module.exports = function() {
    var app = express();

    //logger
    app.use(morgan('common', {
        stream: {
            write: (message) => logger.info(message)
        }
    }));

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use(expressValidator());

    consign()
        .include('controllers')
        .then('persistence')
        .then('services')
        .into(app);

    return app;
}
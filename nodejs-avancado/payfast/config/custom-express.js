var express = require('express')
    , consign = require('consign')
    , bodyParser = require('body-parser')
    , expressValidator = require('express-validator');


module.exports = function() {
    var app = express();

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
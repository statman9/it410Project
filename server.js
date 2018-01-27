const http = require('http');
const fs = require('fs');
var url = require("url");
const express = require('express');
var app = express();

var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var path = require("path");

app.set('port', process.env.PORT || 3000);
app.set('host', '0.0.0.0');
app.use(express.static('public'));
app.use(express.static('files'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const server = http.createServer(app).listen(app.get('port'), app.get('host'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

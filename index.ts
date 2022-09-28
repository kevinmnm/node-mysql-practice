const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
const routes = require('./controller/router/router');
const query = require('./model/database').query;

app.use(
   bodyParser.urlencoded({ extended: true }),
   bodyParser.json(),
   routes
);

server.listen(3000, () => {
   console.log('Running!');
});
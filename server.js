'use strict';

const express = require('express');
const bodyParser = require('body-parser'); // parser for post requests

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world from app1\n');
});

app.get('/get', (req, res) => {
  res.json({'status': 'data from app1'});
});

app.post('/message', (req, res) => {
  res.json(req.body);
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);
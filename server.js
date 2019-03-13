require('newrelic');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const favicon = require('serve-favicon')
const proxy = require('http-proxy-middleware')


const app = express();

app.use(cors());

app.use(compression());

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use('/files', express.static(`${__dirname}/public`));

app.get('/:id', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/loaderio-ae1ea8a4e2b01d500bfd475abde53608.txt', (req, res) => {
  res.sendFile(`${__dirname}/public/loaderio-ae1ea8a4e2b01d500bfd475abde53608.txt`);
});

app.use('/api', proxy({target: 'http://ec2-3-90-25-170.compute-1.amazonaws.com'}))

app.listen(3001);

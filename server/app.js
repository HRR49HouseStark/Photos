const express = require('express');
const app = express();
const db = require('../db/index.js');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');

app.use(compression());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../client/dist')));

// ---------- COMPRESSION ---------- //

app.get('*.js', (req, res, next) => {
  if (req.header('Accept-Encoding').includes('br')) {
    req.url = req.url + '.br';
    console.log(req.header('Accept-Encoding'));
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'application/javascript; charset=UTF-8');
  }
  next();
});

// ---------- ROUTES ---------- //

app.get('/api/listings/:id', async (req, res) => {

  db.Listings.findOne({id: req.params.id})
    .then(listing => {
      if (!listing) {
        throw new Error;
      }
      res.status(200).send(listing);
    })
    .catch(err => {
      // console.error(err);
      res.status(404).send(err);
    })
})

module.exports = app;
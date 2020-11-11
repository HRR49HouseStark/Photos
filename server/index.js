const express = require('express');
const app = express();
const port = 3000;

const {Listings, db} = require('./db/index.js');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/client/dist'))

app.get('/api/listings', (req, res) => {
  Listings.find()
    .then(listings => {
      res.send(listings);
    })
    .catch(err => {
      console.log(err);
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
var mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/FEC_photos')

const db = mongoose.connection;
db.once('open', () => console.log('Connected to listings database!'));

const ListingsSchema = new mongoose.Schema({
    id: {
      type: Number,
      unique: true
    },
    address: String,
    state: String,
    city: String,
    zipCode: Number,
    price: Number,
    beds: Number,
    baths: Number,
    photos: Array
});

const Listings = mongoose.model('listings', ListingsSchema);

module.exports = {
  Listings,
  db
}

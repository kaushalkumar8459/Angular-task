var mongoose = require('mongoose');
//schema
var ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contactdata = mongoose.model('contactform', ContactSchema);
module.exports = Contactdata;

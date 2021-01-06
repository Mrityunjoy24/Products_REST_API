var express = require('express');
app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose');
Product = require('./models/productModel');
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/onlinestore', { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("we are connected to database onlinestore");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./routes/productRoutes');
routes(app);

app.use(function (req, res) {

  res.status(404).send({ url: req.originalUrl + ' not found' })

});



app.listen(port, function (req, res) {
  console.log('Online Store -  RESTful web services with Nodejs started on: ' + port);

});

module.exports = app;

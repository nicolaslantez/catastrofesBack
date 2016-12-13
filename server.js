'use strict';

const
  bodyParser = require('body-parser'),
  express = require('express'),
  centerController = require('./controllers/centerController');
  mongoose = require('mongoose');


var app = express();
app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.use(bodyParser.json({ verify: verifyRequestSignature }));
app.use(express.static('public'));


// MongoDb connection
mongoose.connect(config.get('connectionString'));

centerController(app);




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

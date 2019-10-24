var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));


mongoose.connect('mongodb://localhost/movies');

mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());



require("./server/config/mongoose.js");

require('./server/config/routes.js')(app)



app.listen(8000, function(){
    console.log("Listening on port: 8000");
})
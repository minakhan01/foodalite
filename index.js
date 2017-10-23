
const express = require('express')
const app = express()

// var app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(__dirname + '/app'));
// app.use('/bower_components',  express.static(__dirname + '/bower_components'));
// app.use('/bower_components',  express.static(__dirname + '/chart.js'));



console.log(__dirname);
app.use('/bower_components',express.static(__dirname+'/bower_components'));


app.use('/src',express.static(__dirname+'/src'));
app.get('/', function (req, res) {
	res.sendFile(__dirname+"/index.html");
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("waiting port 3000")
})
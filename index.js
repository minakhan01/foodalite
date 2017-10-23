
const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.send("hello world")
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("waiting port 3000")
})
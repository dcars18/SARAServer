var express = require('express')
var mailer = require('./mailer')
var app = express()

app.get('/', function (req, res) {
	res.send('Hello World!')
	mailer.sendMail('deca222@g.uky.edu')
})

app.listen(3030, function () {
	console.log('Example app listening on port 3030!')
})
var express = require('express')
var mailer = require('./mailer')
var app = express()

app.get('/SARAEmail', function (req, res) {
	//res.send('Hello World!')
	res.send("Email would be sent...")
	//res.sendStatus(200);
	
	//mailer.sendMail('dakota.amiot@uky.edu')
	//mailer.sendMail('atsn222@g.uky.edu')
})

app.get('/Anthony', function(req, res){
	res.send("Hello Anthony!")

})

//Start Listening on port 3030
app.listen(3030, function () {
	console.log('Listening on port 3030!')
})
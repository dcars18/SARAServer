var express = require('express')
var mailer = require('./mailer')
var app = express()

app.use(require('body-parser').json({ extended: true }));

app.post('/SARAEmail', function (req, res) {
	//res.send('Hello World!')
	//console.log(req.body.name);
	//res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");
	
	res.send(req.body)
	//res.sendStatus(200);
	
	//mailer.sendMail('dakota.amiot@uky.edu')
	//mailer.sendMail('atsn222@g.uky.edu')
})

app.get('/Anthony', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

	res.send("Hello Anthony!")
})

//Start Listening on port 3030
app.listen(3030, function () {
	console.log('Listening on port 3030!')
})
const route = require('express').Router();

route.post('/backend',function(req,res) {
	console.log(req.body.kno && req.body.email === 'nj4710@gmail.com' && req.body.phone === '9891234');
	if(req.body.kno === '12345') {
		console.log("suceess");
	}

	res.send("something");

});

module.exports = route;

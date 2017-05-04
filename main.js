var express = require('express');
var app = express();

// Require my controllers
var mouseControl = require('./controllers/mouseController.js');
var keyboardControl = require('./controllers/keyboardController.js');

// Mouse functionality
app.get('/mouse/move', function(req,res){
    var xDiff = parseInt(req.query.x) || 0;
	var yDiff = parseInt(req.query.y) || 0;
	
	res.send('Moving mouse by (' + xDiff + ',' + yDiff + ')');
	
	mouseControl.moveMouse(xDiff,yDiff);
});

app.get('/mouse/click', function(req,res){
    var button = req.query.button;
	
	res.send('Clicking mouse button: ' + button);
	
	mouseControl.clickMouse(button);
});

// TODO: Scroll not currently working, investigate
app.get('/mouse/scroll', function(req,res){
    var xAmount = parseInt(req.query.x) || 0;
	var yAmount = parseInt(req.query.y) || 0;
	
	res.send('Scrolling mouse by (' + xAmount + ',' + yAmount + ')');
	
	mouseControl.scrollMouse(xAmount,yAmount);
});


// Keyboard functionality
app.get('/keyboard/string', function(req,res){
    var string = req.query.string
	
	res.send('Typing string: ' + string);
	
	keyboardControl.keyString(string);
});


// Start the app
app.listen(3000,function(){
    console.log('Listening on Port 3000');
});
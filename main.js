var express = require('express');
var robot = require('robotjs');
var app = express();


app.get('/', function(req,res){
    res.send('Moving mouse to center of screen and right clicking');
    
    var x = robot.getScreenSize().width / 2;
    var y = robot.getScreenSize().height / 2;
    
    robot.moveMouse(x,y);
    robot.mouseClick('right');
});


app.listen(3000,function(){
    console.log('Listening on Port 3000');
});
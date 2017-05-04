var robot = require('robotjs');

module.exports.moveMouse = function(xDiff,yDiff){
	var x = robot.getMousePos().x;
	var y = robot.getMousePos().y;
	
	x = x + xDiff;
	y = y + yDiff;
	
	robot.moveMouseSmooth(x,y);
};


module.exports.clickMouse = function(button){
	if(button === 'left' || button === 'right'){
		robot.mouseClick(button);
	}
};


module.exports.scrollMouse = function(xAmount,yAmount){
	robot.scrollMouse(xAmount,yAmount);
};
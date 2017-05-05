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

// The robot scroll is backward to what I expect, so putting
// the parameters the other way around
module.exports.scrollMouse = function(xAmount,yAmount){
	robot.scrollMouse(yAmount,xAmount);
};
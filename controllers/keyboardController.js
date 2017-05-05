var robot = require('robotjs');

module.exports.keyString = function(string){
	robot.typeString(string);
};

module.exports.keyPress = function(button,modifier){
	if(modifier === undefined){
		robot.keyTap(button);
	} else {
		robot.keyTap(button,modifier);
	}
};
// Show only mouse view on start$(mouseView);// View swappingfunction mouseView(){	console.log('Switching to mouse view');	$('.keyboardView').hide();	$('.mouseView').show();}function keyboardView(){	console.log('Switching to keyboard view');	$('.mouseView').hide();	$('.keyboardView').show();}// Mouse FunctionalitysetInterval(sendMoveMouse,300);		var x = 150;var y = 100;var xBuff = 0;var yBuff = 0;var changed = false;function moveMouse(e){	changed = true;	var xDiff = e.clientX - x;	var yDiff = e.clientY - y;	xBuff = xBuff + xDiff;	yBuff = yBuff + yDiff;	x = e.clientX;	y = e.clientY;}function initialMove(e){	x = e.clientX;	y = e.clientY;}function sendMoveMouse(){	if(changed){		var query = '?x='+xBuff+'&y='+yBuff;		var path = '/mouse/move' + query;		$.post(path);		console.log('(' + xBuff + ',' + yBuff + ')');		xBuff = 0;		yBuff = 0;	}	changed = false;}function leftClick(){	console.log('Left click');	var query = '?button=left';	var path = '/mouse/click' + query;	$.post(path);}function rightClick(){	console.log('Right click');	var query = '?button=right';	var path = '/mouse/click' + query;;	$.post(path);}function scrollVertical(amount){	console.log('Scrolling: ' + amount);	var query = '?y=' + amount;	var path = '/mouse/scroll' + query;	$.post(path);}// Keyboard Functionalityfunction sendString(){	var string = $('#string').val();	console.log('Sending string: ' + string);	var query = '?string=' + string;	var path = '/keyboard/string' + query;	$.post(path);}function buttonPress(button){	console.log('Sending button press: ' + button);	var query = '?button=' + button;	var path = '/keyboard/press' + query;	$.post(path);}
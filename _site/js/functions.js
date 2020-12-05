/* global $ */

$(document).ready(function(){
	const fs = require('fs');

	var folder = "./images";

	var game = document.getElementById("gameName");

	switch(game.value){
		case 'seeker':
			folder ="./images/seeker";
			var length = fs.readdirSync(folder).length;
			console.log(folder);
			console.log(length);
			break;
		default:
			console.log("image folder could not load");
			break;
	}
});
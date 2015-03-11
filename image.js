var util = require('util');
var Canvas = require('canvas');
var config = require('./config').image_size;

function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

function colors (n,low, high) {
	var color_list = new Array(n);
	for (var i = 0; i < color_list.length; i++) {
	    color_list[i] = randomIntInc(low, high)
	}
	return color_list
}

function image (callback){
	var Image = Canvas.Image;
	var canvas = new Canvas(config.width, config.height);
	var ctx = canvas.getContext('2d');
	var color_list = colors(3,1,255);
	var rgb = util.format('rgb(%s,%s,%s)', color_list[0], color_list[1], color_list[2]);
	ctx.fillStyle = rgb     
	ctx.fillRect(0,0,config.width, config.height);                 
	ctx.save();
	return [canvas.toBuffer().toString('base64'), rgb]
}
module.exports.image = image;
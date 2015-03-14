var util = require('util');
var color = require('onecolor');

convert = function(rgb_color){
	var rgb = color(rgb_color);
	var hex = rgb.hex();
	var css = rgb.css();
	return util.format('#color \n%s \n%s', hex, css);
};

module.exports.convert = convert;
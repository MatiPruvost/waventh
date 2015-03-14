var util = require('util');
var color = require('onecolor');

convert = function(rgb_color){
	var rgb = color(rgb_color);
	var hex = rgb.hex();
	var css = rgb.css();
	return util.format('#color \n%s \n%s', hex, css);
};
module.exports.convert = convert;

var main = function(){
	var arguments = process.argv.slice(2);
	var rgb = util.format('rgb(%s,%s,%s)', arguments[0], arguments[1], arguments[2])
 	console.log(convert(rgb));
}
if (require.main === module) {
    main();
}
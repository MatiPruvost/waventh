var util = require('util');
var colorsLogs = require('colors');
var color = require('onecolor');
var logs = require('./logs');

colorsLogs.setTheme({
  subInitializing: logs.subInitializing,
  clog: logs.clog
});

convert = function(rgb_color){
  console.log('    Converting colors'.subInitializing);
  console.log('      Colors '.clog, rgb_color);
  var rgb = color(rgb_color);
  var hex = rgb.hex();
  var css = rgb.css();
  console.log('    Converted colors'.clog);
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
var fs = require('fs');
var colorsLogs = require('colors');
var Twit = require('twit');
var config = require('./config').twitter;
var color = require('./color.js');
var image = require('./image.js');
var logs = require('./logs');

colorsLogs.setTheme({
  subInitializing: logs.subInitializing,
  clog: logs.clog,
});

create = function(){
  console.log('  Creating tweet'.subInitializing);
  var T = new Twit({
    consumer_key: config.consumer_key,
    consumer_secret:config.consumer_secret,
    access_token:config.access_token,
    access_token_secret:config.access_token_secret
  });
  var img = image.image()
  var b64content = img[0];
  var status = color.convert(img[1]);
  console.log('  Uploading tweet'.subInitializing);
  T.post('media/upload', { media: b64content }, function (err, data, response) {
    var mediaIdStr = data.media_id_string
    var params = { status: status, media_ids: [mediaIdStr] }
    T.post('statuses/update', params, function (err, data, response) {
      console.log('    Tweet info'.clog);
      console.log('    Tweet created at: '.clog, data.created_at);
      console.log('    Tweet id: '.clog, data.id);
      console.log('    Tweet text: '.clog, data.text);
      console.log('    Tweet user name: '.clog, data.user.name);
      console.log('    Tweet user id: '.clog, data.user.id);
    })
  });
};
module.exports.create = create;

var main = function(){
  create();
}
if (require.main === module) {
  main();
}
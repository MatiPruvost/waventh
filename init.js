var fs = require('fs');
var Twit = require('twit');
var config = require('./config').twitter;
var image = require('./image.js');

var T = new Twit({
    consumer_key: config.consumer_key,
    consumer_secret:config.consumer_secret,
    access_token:config.access_token,
    access_token_secret:config.access_token_secret
});
var img = image.image()
var b64content = img[0];
var rgb = img[1];
T.post('media/upload', { media: b64content }, function (err, data, response) {
  var mediaIdStr = data.media_id_string
  var params = { status: rgb, media_ids: [mediaIdStr] }
  T.post('statuses/update', params, function (err, data, response) {
    console.log(data)
  })
});
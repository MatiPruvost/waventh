var util = require('util');
var colorsLogs = require('colors');
var CronJob = require('cron').CronJob;
var twitt = require('./twitt.js');
var config = require('./config').cron_job;
var logs = require('./logs');

colorsLogs.setTheme({
  initializing: logs.initializing,
  error: logs.error
});

console.log('Initializing waventh'.initializing);
twitt.create();
console.log('Waiting for tweet'.initializing);

var cronTime_config = util.format('%s */%s * * *', config.minute, config.hour);
var job = new CronJob({
  cronTime: cronTime_config,
  onTick: function() {
    twitt.create();
    console.log('Waiting for tweet'.initializing);
  },
});
job.start();
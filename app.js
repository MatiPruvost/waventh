var util = require('util');
var CronJob = require('cron').CronJob;
var twitt = require('./twitt.js');
var config = require('./config').cron_job;

var cronTime_config = util.format('%s */%s * * *', config.minute, config.hour);
var job = new CronJob({
  cronTime: cronTime_config,
  onTick: function() {
  	twitt.create();
  },
});
job.start();
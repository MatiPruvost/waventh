module.exports = function(grunt) {
  grunt.initConfig({
    "file-creator": {
      "config": {
        "config.json": function(fs, fd, done) {
          fs.writeSync(fd, '{\n');
          fs.writeSync(fd, '  "twitter":{\n');
          fs.writeSync(fd, '    "consumer_key": "Your consumer key",\n');
          fs.writeSync(fd, '    "consumer_secret": "Your consumer secret",\n');
          fs.writeSync(fd, '    "access_token": "Your access token",\n');
          fs.writeSync(fd, '    "access_token_secret": "Your access token secret"\n');
          fs.writeSync(fd, '  },\n');
          fs.writeSync(fd, '  "image_size":{\n');
          fs.writeSync(fd, '    "width":200,\n');
          fs.writeSync(fd, '    "height":200\n');
          fs.writeSync(fd, '  },\n');
          fs.writeSync(fd, '  "cron_job":{\n');
          fs.writeSync(fd, '    "minute":0,\n');
          fs.writeSync(fd, '    "hour":10\n');
          fs.writeSync(fd, '  }\n');
          fs.writeSync(fd, '}\n');
          done();
        }
      }
    }
  })
  grunt.loadNpmTasks('grunt-file-creator');
};
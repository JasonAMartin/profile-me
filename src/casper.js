var casper = require('casperjs').create({
  viewportSize: {width: 1950, height: 1950}
});

casper.start('https://www.vegas.com/', function() {
    this.captureSelector('vegas.png', 'body');
});

casper.run();

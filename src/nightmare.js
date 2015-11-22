var Nightmare = require('nightmare');
var vo = require('vo');

vo(function* () {
  var nightmare = Nightmare({ show: true , width:2000, height:4444});
  var link = yield nightmare
    .goto('https://www.vegas.com')
    .wait(5000)
    .screenshot('vegas.png')
    .evaluate(function () {
      return document.querySelector('.footer-heading').innerText;
    });
  yield nightmare.end();
  return link;
})(function (err, result) {
  if (err) return console.log(err);
  console.log(result);
});

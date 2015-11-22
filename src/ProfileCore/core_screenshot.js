import Nightmare from 'nightmare';
import vo from 'vo';

module.exports = {

/**
 * Use Nightmare to generate a screenshot of a url
 *
 * @function takeScreenshot
 * @param {String} site The url of the site for the screenshot
 * @param {Number} wait The amount of time in MS the browser should wait before taking a screenshot
 * @param {String} screenshotDirectory The directory for saving the screenshot
 * @param {String} screenName The full name of the file, including extension & location (./tmp/example.png), for the screenshot.
 */

  takeScreenshot: function(site,wait,screenshotDirectory, screenName) {
    // TODO: If screenshotDirectory doesn't exist, this fails, so I need to create it or send back fail
    // TODO: Clean this up. CB is wrong and no need for eval.
    vo(function* () {
      var nightmare = Nightmare({ show: true , width:2000, height:4444});
      var link = yield nightmare
        .goto(site)
        .wait(wait)
        .screenshot(screenshotDirectory + screenName)
        .evaluate(function () {
          return document.querySelector('.footer-heading').innerText;
        });
      yield nightmare.end();
      return link;
    })(function (err, result) {
      var result;
      if (err) {
        result = true;
      } else {
        result = false;
      }
    });
  }
}

'use strict';

var _nightmare = require('nightmare');

var _nightmare2 = _interopRequireDefault(_nightmare);

var _vo = require('vo');

var _vo2 = _interopRequireDefault(_vo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  takeScreenshot: function takeScreenshot(site, wait, screenshotDirectory, screenName) {
    // TODO: If screenshotDirectory doesn't exist, this fails, so I need to create it or send back fail
    // TODO: Clean this up. CB is wrong and no need for eval.
    (0, _vo2.default)(regeneratorRuntime.mark(function _callee() {
      var nightmare, link;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nightmare = (0, _nightmare2.default)({ show: true, width: 2000, height: 4444 });
              _context.next = 3;
              return nightmare.goto(site).wait(wait).screenshot(screenshotDirectory + screenName).evaluate(function () {
                return document.querySelector('.footer-heading').innerText;
              });

            case 3:
              link = _context.sent;
              _context.next = 6;
              return nightmare.end();

            case 6:
              return _context.abrupt('return', link);

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }))(function (err, result) {
      var result;
      if (err) {
        result = true;
      } else {
        result = false;
      }
    });
  }
};
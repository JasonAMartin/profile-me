'use strict';

var Nightmare = require('nightmare');
var vo = require('vo');

vo(regeneratorRuntime.mark(function _callee() {
  var nightmare, link;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          nightmare = Nightmare({ show: true, width: 2000, height: 4444 });
          _context.next = 3;
          return nightmare.goto('https://www.vegas.com').wait(5000).screenshot('vegas.png').evaluate(function () {
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
  if (err) return console.log(err);
  console.log(result);
});
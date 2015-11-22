'use strict';

var _xRay = require('x-ray');

var _xRay2 = _interopRequireDefault(_xRay);

var _download = require('download');

var _download2 = _interopRequireDefault(_download);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /**
   * Visit a page, look for all images in an IMG tag, download them and save them to a folder
   *
   * @function downloadImages
   * @param {String} page The url to visit for images
   * @param {String} saveLocation The directory for saving the images. This function will create the location if it doesn't exist (and it's possible)
   */

  downloadImages: function _downloadImages(page, saveLocation) {
    var xray = new _xRay2.default();

    // check if saveLocation exists. If not, make it.
    // Using blocking version since the location is needed to proceed
    if (!_fs2.default.existsSync(saveLocation)) {
      _fs2.default.mkdirSync(saveLocation);
    }

    xray(page, 'img', [{
      img: '',
      src: '@src',
      width: '@width',
      height: '@height'
    }])(function _dlImage(err, results) {
      var download = new _download2.default();
      results.filter(function _filterImage(image) {
        return image;
      }).forEach(function _eachImg(image) {
        download.get(image.src);
      });
      download.dest(saveLocation);
      download.run();
      //  fs.writeFile('../working/results.json', JSON.stringify(results, null, '\t'));
    });
  }
};
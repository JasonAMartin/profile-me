import Xray from 'x-ray';
import Download from 'download';
import fs from 'fs';

module.exports = {
  /**
   * Visit a page, look for all images in an IMG tag, download them and save them to a folder
   *
   * @function downloadImages
   * @param {String} page The url to visit for images
   * @param {String} saveLocation The directory for saving the images. This function will create the location if it doesn't exist (and it's possible)
   */

  downloadImages: function _downloadImages(page, saveLocation) {
    const xray = new Xray();

    // check if saveLocation exists. If not, make it.
    // Using blocking version since the location is needed to proceed
    if (!fs.existsSync(saveLocation)) {
      fs.mkdirSync(saveLocation);
    }

    xray(page, 'img',
      [{
        img: '',
        src: '@src',
        width: '@width',
        height: '@height'
      }]
    )(function _dlImage(err, results) {
      const download = new Download();
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

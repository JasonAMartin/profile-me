'use strict';

var _core_screenshot = require('./core_screenshot');

var _core_scrape = require('./core_scrape');

// var getSitemap = core_sitemap.getSitemap;
// var saveSiteMap = core_sitemap.saveSiteMap;
// var getAltURLs = core_sitemap.getAltURLs;
// var takeScreenshot = core_screenshot.takeScreenshot;
// var getWiredURLs = core_sitemap.getWiredURLs;
// var downloadImages = core_scrape.downloadImages;

module.exports = {
  getScreen: _core_screenshot.takeScreenshot,
  getSitemap: _core_screenshot.getSitemap,
  getAltURLs: _core_screenshot.getAltURLs,
  saveSiteMap: _core_screenshot.saveSiteMap,
  getWiredURLs: _core_screenshot.getWiredURLs,
  downloadImages: _core_scrape.downloadImages
}; // var core_screenshot = require('./core_screenshot');
// var core_scrape = require('./core_scrape');
// var core_sitemap = require('./core_scrape');
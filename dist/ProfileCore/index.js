'use strict';

var core_screenshot = require('./core_screenshot');
var core_scrape = require('./core_scrape');
var core_sitemap = require('./core_scrape');

// import {getSitemap, getAltURLs, saveSiteMap, getWiredURLs} from './core_screenshot';
// import {downloadImages} from './core_scrape';

var getSitemap = core_sitemap.getSitemap;
var saveSiteMap = core_sitemap.saveSiteMap;
var getAltURLs = core_sitemap.getAltURLs;
var takeScreenshot = core_screenshot.takeScreenshot;
var getWiredURLs = core_sitemap.getWiredURLs;
var downloadImages = core_scrape.downloadImages;

module.exports = {
  getScreen: takeScreenshot,
  getSitemap: getSitemap,
  getAltURLs: getAltURLs,
  saveSiteMap: saveSiteMap,
  getWiredURLs: getWiredURLs,
  downloadImages: downloadImages
};
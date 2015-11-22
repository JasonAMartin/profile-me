import {getSitemap, getAltURLs, saveSiteMap, getWiredURLs} from './core_screenshot';
import {downloadImages} from './core_scrape';
import {takeScreenshot} from './core_screenshot';

module.exports = {
  getScreen: takeScreenshot,
  getSitemap: getSitemap,
  getAltURLs: getAltURLs,
  saveSiteMap: saveSiteMap,
  getWiredURLs: getWiredURLs,
  downloadImages: downloadImages
};

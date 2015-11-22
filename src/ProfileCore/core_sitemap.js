import fs from 'fs';
import Download from 'download';

module.exports = {

/**
 * Use Nightmare to generate a screenshot of a url
 *
 * @function saveSiteMap
 * @param {String} site The url of sitemap
 * @param {String} destination The folder to save the sitemap into
 * @param {String} fileName The name of the file, example (sitemap.xml)
 */

  saveSiteMap: function _saveSiteMap(site, destination, fileName) {
    return new Promise(function _saveSitemapPromise(resolve) {
      const download = new Download();
      download.get(site);
      download.dest(destination);
      download.rename(fileName);
      download.run(function _runDL(err, data) {
        resolve(data);
      });
    });
  },

  /**
   * Fetch a copy of a sitemap
   *
   * @function getSiteMap
   * @param {String} site The url of sitemap
   */

  getSitemap: function _getSiteMap(site) {
    return new Promise(function _getSitemapPromise(resolve) {
      const download = new Download();
      download.get(site);
      download.run(function _runDL(err, data) {
        resolve(data);
      });
    });
  },

    /**
     * Looks for <loc> URLs in a sitemap
     *
     * @function getWiredURLs
     * @param {String} sitemap The location of the sitemap file on local system to parse
     */

  getWiredURLs: function _getWiredURLs(sitemap) {
    return new Promise(function _getWiredURLsPromise(resolve) {
      fs.readFile(sitemap, 'utf8', function _readFile(err, data) {
        let index = 0;
        const finalURLSet = [];
        const reg = /<loc>[\s\S]*?<\/loc>/g;
        const allURLs = data.match(reg);
        const len = allURLs.length;
        for (index = 0; index < len; index++) {
          finalURLSet.push(allURLs[index].replace('<loc>', ''). replace('</loc>', ''));
        }
        // console.log("works", allURLs);
        resolve(finalURLSet);
      });
    });
  },

    /**
     * Looks for <url> tags in sitemap, then pulls out HREF that should be in the <xhtml:link> tag.
     * TODO: Ideally, I should look for rel="alternate" within the <url> scope just to be sure in case someone is doing some odd formatting.
     *
     * @function getAltURLs
     * @param {String} sitemap The location of the sitemap file on local system to parse
     */

  getAltURLs: function _getAltURLs(sitemap) {
    return new Promise(function _getAltURLsPromise(resolve) {
      fs.readFile(sitemap, 'utf8', function _readFile(err, data) {
        let index = 0;
        let urlReg;
        let hrefSets;
        const reg = /<url>[\s\S]*?<\/url>/g;
        const urlSets = data.match(reg);
        const len = urlSets.length;
        let currentItem;
        const altURLs = [];
        for (index = 0; index < len; index++) {
          currentItem = urlSets[index];
          urlReg = /(href=\")([^\"]*)(\")/g;
          hrefSets = urlReg.exec(currentItem);
          if (hrefSets !== null) altURLs.push(hrefSets[2]);
        }
        resolve(altURLs);
      });
    });
  }
};

import ProfileCore from './ProfileCore/index.js';
const CONFIG = require('./config.json');

// var something = ProfileCore.getScreen('https://www.vegas.com/', 5000, CONFIG.screenshotDirectory, 'vegas1.png');
// var something = ProfileCore.saveSiteMap(CONFIG.sitemap, CONFIG.workingDirectory, CONFIG.sitemapName);
// var something = ProfileCore.getSitemap('https://www.vegas.com/sitemap_https.xml');
// var something = ProfileCore.getAltURLs(CONFIG.workingDirectory + CONFIG.sitemapName, function(d){console.log('done', d)});
// something.then(function(){
//   ProfileCore.getWiredURLs(CONFIG.workingDirectory + CONFIG.sitemapName, function(d){ console.log('data', d.length)});
// });

// EXAMPLE: Get sitemap, save it then export out wired URLS
// var task = ProfileCore.saveSiteMap(CONFIG.sitemap, CONFIG.workingDirectory, CONFIG.sitemapName);
//   task.then(function(data) {
//     var taskTwo = ProfileCore.getWiredURLs(CONFIG.workingDirectory + CONFIG.sitemapName);
//     taskTwo.then(function(sitemapData) {
//       console.log("promise chain", sitemapData);
//     });
// });
//
// // EXAMPLE: Get sitemap, save it then export out alt URLS
// var task = ProfileCore.saveSiteMap(CONFIG.sitemap, CONFIG.workingDirectory, CONFIG.sitemapName);
//   task.then(function(data) {
//     var taskTwo = ProfileCore.getAltURLs(CONFIG.workingDirectory + CONFIG.sitemapName);
//     taskTwo.then(function(sitemapData) {
//       console.log("promise chain", sitemapData);
//     });
// });


// EXAMPLE: Download all images from page

ProfileCore.downloadImages('https://www.vegas.com', CONFIG.imagesDirectory);


//
// var something = ProfileCore.getWiredURLs(CONFIG.workingDirectory + CONFIG.sitemapName);
// something.then(function(d) {
//   console.log("done done", d);
// });

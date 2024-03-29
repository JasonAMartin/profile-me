'use strict';

var _xRay = require('x-ray');

var _xRay2 = _interopRequireDefault(_xRay);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _download = require('download');

var _download2 = _interopRequireDefault(_download);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xray = new _xRay2.default();

// xray('https://www.vegas.com/sitemap_https.xml', 'url',
//   [{
//       loc: 'loc',
//       href: '@href',
//       css: '@class',
//       cssID: '@id'
//   }]
// )

// xray('https://www.vegas.com', 'img',
//   [{
//       img: '',
//       src: '@src',
//       width: '@width',
//       height: '@height'
//   }]
// )(function(err, results){
//   var download = new Download();
//   resultsTwo = results.filter(function(image){
//     return image;
//   }).forEach(function(image){
//     download.get(image.src);
//     console.log('getting')
//   });
//   download.dest("../working/images");
//   download.run();
//   fs.writeFile('../working/results.json', JSON.stringify(results, null, '\t'));
// });
//

//.write('results.json');

var download = new _download2.default();
download.get('https://www.vegas.com/sitemap_https.xml');
download.dest('../working/');
download.rename('sitemap.xml');
download.run(function (err, data) {
  // complete callback
  _fs2.default.readFile('../working/sitemap.xml', 'utf8', function (err, data) {
    // process regex
    var reg = /<url>[\s\S]*?<\/url>/g;
    var urlSets = data.match(reg);
    //console.log(urlSets);
    var len = urlSets.length;
    var currentItem;
    for (var item = 0; item < len; item++) {
      currentItem = urlSets[item];
      var urlReg = /(href=\")([^\"]*)(\")/g;
      var hrefSets = urlReg.exec(currentItem);
      if (hrefSets !== null) console.log(hrefSets[2]);
      // get loc
      // get xhtml href?

      // console.log(item, "::", currentItem);
    }
  });
});
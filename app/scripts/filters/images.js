'use strict';

/**
 * @ngdoc function
 * @name vknewsappruApp.filter:reorgonizeImages
 * @description
 * # reorgonizeImages
 * Filter of the vknewsappruApp
 */
angular.module('vknewsappruApp')
  .filter('reorgonizeImages', function () {
    function _getBestImageLink(photo) {
      var method, url, ideal = 605, width = 0, reg = /photo_([\d]{2,})/i;
      if (angular.isObject(photo)) {
        for (var key in photo) {
          if (key.match(reg)) {
            if (!method) {
              method = key.match(reg)[0];
              width = Number(key.match(reg)[1]);
            }
            else {
              if (Number(key.match(reg)[1]) > 130) {
                if (Math.abs(ideal - width) > Math.abs(ideal - Number(key.match(reg)[1]))) {
                  method = key.match(reg)[0];
                  width = Number(key.match(reg)[1]);
                }
              } else {
                if (Number(key.match(reg)[1]) > width) {
                  method = key.match(reg)[0];
                  width = Number(key.match(reg)[1]);
                }
              }
            }
          }
        }
        if (method) {
          url = photo[method];
        }
      }
      return url;
    }


    function _getBestImageLinkForDocType(photo) {
      var url;
      if (angular.isArray(photo)) {
        var image = photo[0];
        var ideal = 605;
        for (var i = 1; i < photo.length; i++) {
          if (Number(photo[i].width) > 130) {
            if (Math.abs(ideal - Number(image.width)) > Math.abs(ideal - Number(photo[i].width))) {
              image = photo[i];
            }
          } else {
            if (Number(photo[i].width) > Number(image.width)) {
              image = photo[i];
            }
          }
          url = image.src;
        }
        return url;
      }
    }

    return function (attachments) {
      var images = [];
      var dublicates = {};
      var k = 0;
      for (var i = 0; i < attachments.length; i++) {
        var url = null;
        switch (attachments[i].type) {
          case 'photo':
          case 'posted_photo':
          case 'video':
          case 'graffiti':
          case 'app':
            url = _getBestImageLink(attachments[i][attachments[i].type]);
            break;
          case 'doc':
            if (attachments[i].doc.preview) {
              url = _getBestImageLinkForDocType(attachments[i].doc.preview.photo.sizes);
            }
            break;
          case 'link':
            url = _getBestImageLink(attachments[i].link.photo);
            break;
          case 'album':
            url = _getBestImageLink(attachments[i].album.thumb);
            break;
          default:
            continue;
        }
        if (url && !dublicates[url]) {
          var image = {};
          image.src = url;
          image.id = k;
          k++;
          images.push(image);
          dublicates[url] = true;
        }
      }
      return images;
    }
  })
;

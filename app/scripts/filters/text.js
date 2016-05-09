'use strict';

/**
 * @ngdoc function
 * @name vknewsappruApp.filter:newLine
 * @description
 * # text filters
 * Filter of the vknewsappruApp
 */
angular.module('vknewsappruApp')
  .filter('newLineStart', function () {
    var regex =/((\r)?\n)+/g;
    return function (text) {
      return text.replace(regex, ' [newline] ');
    }
  })
  .filter('newLineStop', function () {
    var regex =/\s\[newline\]\s/g;
    return function (text) {
      return text.replace(regex, '<br/>');
    }
  })
;

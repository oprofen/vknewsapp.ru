'use strict';

/**
 * @ngdoc function
 * @name vknewsappruApp.factory:customCache
 * @description
 * # customCache
 * Factory of the vknewsappruApp
 */
angular.module('vknewsappruApp')
  .factory('customCache', ['$cacheFactory', function($cacheFactory) {
    return $cacheFactory('custom-cache');
  }]);

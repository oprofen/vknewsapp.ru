'use strict';

/**
 * @ngdoc overview
 * @name vknewsappruApp
 * @description
 * # vknewsappruApp
 *
 * Main module of the application.
 */
angular.module('vknewsappruApp', [
    'ngAnimate',
    'ngSanitize',
    'ui.bootstrap',
    'ui.router'
  ])
  .constant('config', {
    apiId: 5449403,
    test_mode: 1,
    maxSize: 10,
    VK_version: '5.52',
    itemsPerPage: 5
  })
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app', {
        url: '/',
        views: {
          'main': {
            templateUrl: 'views/search.html',
            controller: 'SearchController'
          }

        }
      })
      .state('app.search', {
        url: 'search?query',
        params: {
          start_from: null,
          currentPage: 1
        },
        views: {
          'main@': {
            templateUrl: 'views/result.html',
            controller: 'ResultController'
          }
        }
      })
      .state('app.search.read', {
        url: '^/readnews/:nid',
        views: {
          'main@': {
            templateUrl: 'views/news.html',
            controller: 'NewsController'
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/');
  });


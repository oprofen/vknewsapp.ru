'use strict';

/**
 * @ngdoc function
 * @name vknewsappruApp.factory:VKFactory
 * @description
 * # VKFactory
 * Factory of the vknewsappruApp
 */
angular.module('vknewsappruApp')
  .factory('VKFactory',
    ['config', '$q', '$http',
      function (config, $q, $http) {
        var VKFactory = {};
        VKFactory.params = {
          test_mode: config.test_mode,
          count: (config.itemsPerPage * config.maxSize),
          v: config.VK_version,
          extended: 1,
        };
        VKFactory._VK = VK;
        VKFactory._VK.init({
          apiId: config.apiId,

        });
        VKFactory.call = function (method, params) {
          for (var key in VKFactory.params) {
            if (!params[key]) {
              params[key] = VKFactory.params[key];
            }
          }

          var deferred = $q.defer();
          $http({
            method: 'POST',
            url: 'http://ft.dev.hismith.ru/stat/create/',
            headers: {
              'Content-type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            },
            data: 'query=' + params.q

          }).then(function successCallback(r) {
            console.log(r);
          }, function errorCallback(r) {
            console.log(r);
          });
          VKFactory._VK.Api.call(method, params, function (result) {
            if (result.response) {
              deferred.resolve(result.response)
            } else if (result.error) {
              deferred.reject(result.error)
            }
          });
          return deferred.promise;
        };


        /* VKFactory.call = function (method, params) {
         for (var key in VKFactory.params) {
         if (!params[key]) {
         params[key] = VKFactory.params[key];
         }
         }
         console.log(params);
         return $q(function (resolve, reject) {
         VKFactory._VK.Api.call(method, params, function (result) {
         if (result.response) {
         resolve(result.response)
         } else if (result.error) {
         reject(result.error)
         }
         }
         );
         })
         };*/
        return VKFactory;
      }]);

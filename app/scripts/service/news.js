'use strict';

/**
 * @ngdoc function
 * @name vknewsappruApp.service:news
 * @description
 * # news
 * Service of the vknewsappruApp
 *
 */
angular.module('vknewsappruApp')
  .service('newsService',
    ['config', 'VKFactory', '$filter', 'customCache', '$q',
      function (config, VKFactory, $filter, customCache, $q) {
        function _reorgonizeData(data, begin_with) {
          var result = {};
          result.items = [];
          var owners = $filter('reorgonizeOwners')(data.groups, data.profiles);
          for (var i = 0; i < data.items.length; i++) {
            var item = {};
            item.text = data.items[i].text ? $filter('newLineStart')(data.items[i].text) : null;
            item.text = item.text ? $filter('linky')(item.text) : null;
            item.text = item.text ? $filter('newLineStop')(item.text) : null;
            item.id = Number(i + begin_with);
            item.rid = data.items[i].id;
            item.author = data.items[i].from_id ? owners[data.items[i].from_id].name : null;
            item.images = data.items[i].attachments ? $filter('reorgonizeImages')(data.items[i].attachments) : null;
            item.images = (item.images && item.images.length > 0) ? item.images : null;
            item.likes = data.items[i].likes ? data.items[i].likes.count : 0;
            item.date = $filter('date')(data.items[i].date * 1000);
            result.items.push(item);
          }
          result.total_count = data.total_count;
          result.next_from = data.next_from;
          return result;
        }


        this.getItems = function (query, amount, start_from) {
          var params = {q: query};
          if (start_from) {
            params.start_from = start_from;
          }
          var deferred = $q.defer();
          var cache = customCache.get(query);
          console.log(cache, amount);
          if (cache && (cache.items.length >= amount || cache.items.length == cache.total_count)) {
            deferred.resolve(cache);
          } else {
            VKFactory.call('newsfeed.search', params).then(
              function (data) {
                if (cache) {
                  var oldItems = cache.items;
                  data = _reorgonizeData(data,cache.items.length);
                  data.items = oldItems.concat(data.items);
                } else {
                  data = _reorgonizeData(data, 0);
                }
                customCache.put(query, data);
                deferred.resolve(data);
              }, function (error) {
                deferred.reject(error);
              });
          }

          return deferred.promise;
        };
        /* this.getItems = function (query, amount, start_from) {
         var params = {q: query};
         if (start_from) {
         params.start_from = start_from;
         }
         return $q(function (resolve, reject) {
         var cache = customCache.get(query);
         console.log(cache, amount);
         if (cache && (cache.items.length >= amount || cache.items.length == cache.total_count)) {
         resolve(cache);
         } else {
         VKFactory.call('newsfeed.search', params).then(
         function (data) {
         data = _reorgonizeData(data);
         if (cache) {
         var oldItems = cache.items;
         data.items = oldItems.concat(data.items);
         }
         customCache.put(query, data);
         resolve(data);
         }, function (error) {
         reject(error);
         });
         }

         });
         };*/

        this.getItem = function (id, query) {
          var result = null, cache = customCache.get(query);
          if (cache) {
            result = cache.items[id];
          }
          return result;
        };
      }]);

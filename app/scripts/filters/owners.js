'use strict';

/**
 * @ngdoc function
 * @name vknewsappruApp.filter:reorgonizeOwners
 * @description
 * # reorgonizeOwners
 * Filter of the vknewsappruApp
 */
angular.module('vknewsappruApp')
  .filter('reorgonizeOwners', function () {
    var regex = /((ftp|https?):\/\/|(www\.)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i;
      return function (groups, profiles) {
      var result = {}
      for (var i = 0; i < groups.length; i++) {
        result['-' + groups[i].id] = {};
        if(!regex.test(groups[i].name)){
          result['-' + groups[i].id].name = groups[i].name;
        } else {
          result['-' + groups[i].id].name = groups[i].screen_name;
        }
      }
      for (var i = 0; i < profiles.length; i++) {
        result[profiles[i].id] = {};
        result[profiles[i].id].name = profiles[i].first_name + ' ' + profiles[i].last_name;
      }
      return result;
    }
  })
;

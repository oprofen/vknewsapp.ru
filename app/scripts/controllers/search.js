'use strict';

/**
 * @ngdoc function
 * @name vknewsappruApp.controller:SearchController
 * @description
 * # MainCtrl
 * Controller of the vknewsappruApp
 */
angular.module('vknewsappruApp')
  .controller('SearchController',
    ['$scope','$state','$http',
      function ($scope, $state,$http) {
    $scope.search = function(){
      if($scope.query){
        $state.go('app.search',{query:$scope.query, currentPage: 1});
      };
    }
  }]);

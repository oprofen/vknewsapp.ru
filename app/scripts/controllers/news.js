'use strict';

/**
 * @ngdoc function
 * @name vknewsappruApp.controller:NewsController
 * @description
 * # NewsController
 * Controller of the vknewsappruApp
 */
angular.module('vknewsappruApp')
  .controller('NewsController',
    ['$scope', '$state', 'newsService', '$uibModal', function ($scope, $state, newsService, $uibModal) {
      console.log($state.params)
    if (!$state.params.nid || !$state.params.query) {
      $state.go('app');
    }
    $scope.item = newsService.getItem($state.params.nid, $state.params.query);
    $scope.return = function () {
      var params = {query: $state.params.query, currentPage: $state.params.currentPage}, option = {reload: false};
      $state.go('^', params, option);
    };

    $scope.likes = function (amount) {
      return 'Like: ' + amount;
    };
    $scope.author = function (author) {
      return 'Автор: ' + author;
    };
    $scope.date = function (date) {
      return 'Дата: ' + date;
    };
    $scope.openModal = function (src) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'views/modal.html',
        resolve: {
          src: function () {
            return src;
          }
        },
        controller: ['$scope', '$uibModalInstance', 'src', function ($scope, $uibModalInstance, src) {
          $scope.src = src;
          $scope.closeModal = function () {
            $uibModalInstance.close();
          }
        }]
      });
    };
  }]);

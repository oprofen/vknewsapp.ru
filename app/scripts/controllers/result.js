'use strict';

/**
 * @ngdoc function
 * @name vknewsappruApp.controller:ResultController
 * @description
 * # ResultController
 * Controller of the vknewsappruApp
 */
angular.module('vknewsappruApp')
  .controller('ResultController',
    ['$scope', '$state', '$filter', '$uibModal', 'config', 'newsService',
      function ($scope, $state, $filter, $uibModal, config, newsService) {

        var start_from = false, query = $state.params.query;

        function error(err) {
          console.log(err);
          $scope.errorMsg = "<strong>Код ошибки: " + err.error_code + "</strong> " + err.error_msg;
          $scope.showError = true;
        }
        $scope.showError = false;

        $scope.aim = "<em><strong>Вы искали: " + query + "</strong></em>";

        $scope.currentPage = $state.params.currentPage;
        $scope.maxSize = config.maxSize;
        $scope.itemsPerPage = config.itemsPerPage;
        $scope.showContent = false;

        var items = newsService.getItems(query, ($scope.currentPage * $scope.itemsPerPage), start_from).then(
          function (data) {
            console.log(data);
            items = data.items;
            $scope.totalItems = data.total_count;
            start_from = data.next_from;
            $scope.$watch('currentPage', function (newV) {
              if (newV <= (items.length / $scope.itemsPerPage)) {
                $scope.news = $filter('limitTo')(items, $scope.itemsPerPage, (newV - 1) * $scope.itemsPerPage);
              } else {
                items = newsService.getItems(query, (newV * $scope.itemsPerPage), start_from).then(
                  function (data) {
                    items = data.items;
                    start_from = data.next_from;
                    $scope.news = $filter('limitTo')(items, $scope.itemsPerPage, (newV - 1) * $scope.itemsPerPage);
                  },
                  error
                );
              }
            });
          },
          error
        );
        $scope.query = null;
        $scope.search = function () {
          if ($scope.query) {
            $state.go('app.search', {query: $scope.query, currentPage: 1},{reload:true});
          }
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

        $scope.openNews = function (id) {
          $state.go('app.search.read', {nid: id, currentPage: $scope.currentPage});
        };
      }]);

'use strict';

angular.module('main').controller('championshipDetailsControler', function ($scope, $routeParams, DataFactory) {
  $scope.Data = DataFactory;
  $scope.showContent = false;
  $scope.idChampionship = $routeParams.id_championship;
  $scope.Data.getApi("championships").then(function () {
    $scope.showContent = true;
    $scope.$apply();
  });
});
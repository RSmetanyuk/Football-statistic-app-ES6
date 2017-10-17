'use strict';

angular.module('main').controller('teamsControler', function ($scope, DataFactory) {
  $scope.Data = DataFactory;
  $scope.showContent = false;
  $scope.searchActive = false;
  $scope.filterValidNames = function (team) {
    return team.name.length > 0 ? true : false;
  };
  $scope.Data.getApi("teams").then(function () {
    $scope.showContent = true;
    $scope.$apply();
  });
});
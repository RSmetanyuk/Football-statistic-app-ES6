'use strict';

angular.module('main').controller('headerController', function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    var result = true;
    for (var i = 0; i < viewLocation.length; i++) {
      if (viewLocation[i] !== $location.path()[i]) {
        result = false;
      }
    }
    return result;
  };
});
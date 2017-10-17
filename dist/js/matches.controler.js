'use strict';

angular.module('main').controller('matchesControler', function ($scope, DataFactory) {
  $scope.Data = DataFactory;
  $scope.showContent = false;
  $scope.searchActive = false;
  $scope.Data.getApi("matches").then(function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = $scope.Data.matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var match = _step.value;
        match.teamPair = match.firstTeam + ' - ' + match.secondTeam;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    $scope.showContent = true;
    $scope.$apply();
  });
});
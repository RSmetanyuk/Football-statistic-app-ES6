'use strict';

angular.module('main').controller('matchDetailsControler', function ($scope, $routeParams, DataFactory) {
  $scope.Data = DataFactory;
  $scope.showContent = false;
  $scope.idMatch = $routeParams.id_match;
  var p1 = $scope.Data.getApi("championships");
  var p2 = $scope.Data.getApi("matches");
  var p3 = $scope.Data.getApi("teams");
  Promise.all([p1, p2, p3]).then(function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = $scope.Data.matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var match = _step.value;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = $scope.Data.championships[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var championship = _step2.value;

            if (match.title.indexOf(championship.name) >= 0) {
              match.id_championship = championship.id_championship;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
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
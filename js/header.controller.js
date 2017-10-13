app.controller('headerController', function($scope, $location) {
  $scope.isActive = function (viewLocation) { 
    let result = true;
    for (let i=0; i<viewLocation.length; i++) {
      if (viewLocation[i] !== $location.path()[i]) {result = false}
    }
    return result;
  };
});
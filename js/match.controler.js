app.controller('matchDetailsControler', function($scope, $routeParams, DataFactory) {
  $scope.Data = DataFactory;
  $scope.showContent = false;
  $scope.idMatch = $routeParams.id_match;
  let p1 = $scope.Data.getApi("championships");
  let p2 = $scope.Data.getApi("matches");
  let p3 = $scope.Data.getApi("teams");
  Promise.all([p1, p2, p3]).then(() => {
    for (let i = 0; i < $scope.Data.matches.length; i++) {
      for (let j = 0; j < $scope.Data.championships.length; j++) {
        if ($scope.Data.matches[i].title.indexOf($scope.Data.championships[j].name) >= 0) {
          $scope.Data.matches[i].id_championship = $scope.Data.championships[j].id_championship;
        }          
      }
    }
    $scope.showContent = true;
    $scope.$apply();
  });
});
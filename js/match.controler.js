angular
  .module('main')
  .controller('matchDetailsControler', function($scope, $routeParams, DataFactory) {
    $scope.Data = DataFactory;
    $scope.showContent = false;
    $scope.idMatch = $routeParams.id_match;
    let p1 = $scope.Data.getApi("championships");
    let p2 = $scope.Data.getApi("matches");
    let p3 = $scope.Data.getApi("teams");
    Promise.all([p1, p2, p3]).then(() => {
      for (let match of $scope.Data.matches) {
        for (let championship of $scope.Data.championships) {
          if (match.title.indexOf(championship.name) >= 0) {
            match.id_championship = championship.id_championship;
          }          
        }
      }
      $scope.showContent = true;
      $scope.$apply();
    });
  });
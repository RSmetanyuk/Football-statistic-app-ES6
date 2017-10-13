app.controller('championshipDetailsControler', function($scope, $routeParams, DataFactory) {
  $scope.Data = DataFactory;
  $scope.showContent = false;
  $scope.idChampionship = $routeParams.id_championship;
  $scope.Data.getApi("championships").then($scope.showContent = true);
});
app.controller('championshipDetailsControler', function($scope, $routeParams, DataFactory) {
  $scope.Data = DataFactory;
  $scope.showContent = false;
  $scope.idChampionship = $routeParams.id_championship;
  $scope.Data.getApi("championships", function() {
    $scope.showContent = true;
  });
});
app.controller('teamsControler', function($scope, DataFactory) {
  $scope.Data = DataFactory;
  $scope.showContent = false;
  $scope.searchActive = false;
  $scope.filterValidNames = team => team.name.length > 0 ? true : false;
  $scope.Data.getApi("teams").then(() => {
    $scope.showContent = true;
    $scope.$apply();
  });
});
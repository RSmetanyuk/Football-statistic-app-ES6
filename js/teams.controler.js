app.controller('teamsControler', function($scope, DataFactory) {
  $scope.Data = DataFactory;
  $scope.showContent = false;
  $scope.Data.getApi("teams", function() {
    $scope.showContent = true;
  });
  $scope.filterValidNames = function(team) {return (team.name.length > 0 ? true : false)}
  $scope.searchActive = false;
});


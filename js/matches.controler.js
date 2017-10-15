app.controller('matchesControler', function($scope, DataFactory) {
  $scope.Data = DataFactory;
  $scope.showContent = false;
  $scope.searchActive = false;
  $scope.Data.getApi("matches").then(() => {
    for (let match of $scope.Data.matches) match.teamPair =
      `${match.firstTeam} - ${match.secondTeam}`;
    $scope.showContent = true;
    $scope.$apply();
  });
});
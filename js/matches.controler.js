app.controller('matchesControler', function($scope, DataFactory) {
  $scope.Data = DataFactory;
  $scope.showContent = false;
  $scope.searchActive = false;
  $scope.Data.getApi("matches", function() {
    for (var i = 0; i < $scope.Data.matches.length; i++) {
      $scope.Data.matches[i].teamPair = 
      $scope.Data.matches[i].firstTeam.concat(" - ", $scope.Data.matches[i].secondTeam);    
    }
    $scope.showContent = true;
  });
});
app.controller('championshipsControler', function($scope, DataFactory) {  
  $scope.Data = DataFactory;
  $scope.showContent = false;
  $scope.Data.getApi("championships").then($scope.showContent = true);
  $scope.searchActive = false;
});
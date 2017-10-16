angular
  .module('main')
  .controller('championshipsControler', function($scope, DataFactory) {  
    $scope.Data = DataFactory;
    $scope.showContent = false;
    $scope.searchActive = false;
    $scope.Data.getApi("championships")
      .then(() => {
        $scope.showContent = true;
        $scope.$apply();
      });
  });
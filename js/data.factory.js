app.factory('DataFactory', function($http){
  var Data = {};
  
  Data.getApi = function(database, callback) {      
    if (Data[database] === undefined) {
      if (Data.spinner !== undefined && Data.spinner.el !== undefined) Data.spinner.stop();
      Data.spinner = new Spinner({top: '11%'}).spin(document.getElementById("main-content"));       
      $http.get("https://footballbet.com.ua/api/".concat(database, "/"))
        .then(function(response) {
          Data[database] = response.data.result;  
        
          if (database === "teams") {
            for (var i = 0; i < Data.teams.length; i++) {
              Data.teams[i].emblemaUrl = (Data.teams[i].emblema === "" ? "/img/no_logo.png" :
                "https://footballbet.com.ua/teams/embl/".concat(Data.teams[i].emblema));
            }
          }

          callback();
          Data.spinner.stop();
        });
    } else {
      callback();
    }
  };

  return Data;
});
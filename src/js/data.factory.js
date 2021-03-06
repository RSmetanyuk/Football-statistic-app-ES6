angular
  .module('main')
  .factory('DataFactory', function($http){
    let Data = {};
    
    Data.getApi = function(database) {      
      let promise = new Promise(function(resolve, reject) {       
        if (Data[database] === undefined) { 
          if (Data.spinner !== undefined && Data.spinner.el !== undefined) Data.spinner.stop();
          Data.spinner = new Spinner({top: '11%'}).spin(document.getElementById("main-content"));     
          $http.get("https://footballbet.com.ua/api/".concat(database, "/"))
            .then(function(response) {
              Data[database] = response.data.result; 

              if (database === "teams") {
                for (let i in Data.teams) {
                  Data.teams[i].emblemaUrl = (Data.teams[i].emblema === "" ? "/img/no_logo.png" :
                    `https://footballbet.com.ua/teams/embl/$(Data.teams[i].emblema)`;
                }
              }  

              resolve();
              Data.spinner.stop();
            });
        } else {
          resolve();
        }
      }
      return promise;
    }

    return Data;
  });
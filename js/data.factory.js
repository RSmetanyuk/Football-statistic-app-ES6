app.factory('DataFactory', function($http){
  let Data = {};
  
  Data.getApi = function(database) {      
    let promise = new Promise(function(resolve, reject) {       
      if (Data[database] === undefined) { 
        $http.get("https://footballbet.com.ua/api/".concat(database, "/"))
          .then(function(response) {
            Data[database] = response.data.result; 

            if (database === "teams") {
              for (let i in Data.teams) {
                Data.teams[i].emblemaUrl = (Data.teams[i].emblema === "" ? "/img/no_logo.png" :
                  "https://footballbet.com.ua/teams/embl/".concat(Data.teams[i].emblema));
              }
            }  

            resolve();
          });
      } else {
        resolve();
      }
    });
    return promise;
  };

  return Data;
});
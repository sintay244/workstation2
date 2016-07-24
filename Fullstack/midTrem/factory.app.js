angular.module('safeApp')
            .factory('safeFactory',['$http',safeFac])

  function safeFac($http) {
  	      {
  		safeData: function () 
  		{
           return $http.get("https://maps.googleapis.com/maps/api/js?key= AIzaSyDkZwffm7hFPy7pJmq2NbplKAWz_5cpDuk&callback=initMap")
       }
}

  }
angular.module("networkApp")
		.factory("PersonFactory", [
			"$http",
			personFac
		])

function personFac($http){


	return{
		getPersonData: function(emailaddress){
			return $http.get("https://api.fullcontact.com/v2/person.json?apiKey=e1a4b474b99b4898&email=" + city)
		}

	}
}



// email=robert.camp@outlook.com&apiKey=e1a4b474b99b4898

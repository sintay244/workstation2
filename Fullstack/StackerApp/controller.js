angular.module("networkApp")
		.controller("PersonController", [
			"PersonFactory",
			personCtrl

		])

personCtrl.$inject = ['PersonFactory']

function personCtrl(PersonFactory){
	var person = this

	person.emailSearch = function(){
		console.log("Got here")

		PersonFactory.getPersonData(person.email).then(function(response){
			person.personData = response.data
			console.log(response)
			person.imageUrl = person.personData.photos[0].url
			person.name = person.personData.contactInfo.fullName
			person.social = person.personData.socialProfiles
			
		})

	}
		



			return person.imageUrl, person.name, person.social




}




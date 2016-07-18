angular.module('first',[]);
angular.module('first')
       .controller("display",['$scope',Exclam]);
       function Exclam($scope) {
       	 $scope.addi='!';
       	 $scope.Excam=function() {
       	 	$scope.attach='!';
       	 	console.log($scope.attach)
       	 }

       }

       	
   

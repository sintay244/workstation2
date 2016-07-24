angular.module('myHotel')
             .factory('myFactory',["$scope",data])

    function data($scope) {
    	$scope.name=function intersting() {
    		var cool=this.message;
    		cool="almost there";
    		return cool;
    	}
    }
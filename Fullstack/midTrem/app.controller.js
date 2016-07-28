angular.module('safeApp')
                  .controller('safeControl',['safeFactory',safeCtrl])

        safeCtrl.$inject=['safeFactory']

        function safeCtrl(safeFactory) {
        	console.log(safeFactory)

        	var sCtrl=this;
            sCtrl.safety=function () {
            
        	safeFactory.getsafeData().then(function(response) {
        		sCtrl.getsafetyData=response.data;
        		safeFactory.cleanData=response.data;
        		console.log(sCtrl.safetyData);


        	})
           }
           return sCtrl.safetyData;
        }
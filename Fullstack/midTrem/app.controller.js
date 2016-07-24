angular.module('safeApp')
                  .controller('safeControl',['safeFactory',safeCtrl])

        function safeCtrl(safeFactory) {
        	console.log(safeFactory)

        	var sCtrl=this;
        	safeFactory.safeData().then(function(response) {
        		sCtrl.safetyData=response.data;
        		safeFactory.cleanData=response.data;
        		console.log(sCtrl.safetyData);
        	})

        }
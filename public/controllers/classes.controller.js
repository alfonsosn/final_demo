app.controller('classCtrl', function($scope, $rootScope, 
	$stateParams, classesFactory, finalsFactory) {
	var queryObj = {
			length : parseInt($rootScope.length),
			weeklySched : $stateParams.schedule
		}
	$rootScope.classes = classesFactory.getClasses(queryObj)
	
	$scope.addToSchedule = function(classToAdd) {
		finalsFactory.addFinals(classToAdd);
		console.log(finalsFactory.obtainFinals())
	}

	$scope.download = function(){
		finalsFactory.downloadFinals()
	}
})


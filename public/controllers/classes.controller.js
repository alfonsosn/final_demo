app.controller('classCtrl', function($scope, $rootScope, 
	$stateParams, classesFactory, finalsFactory) {
	var queryObj = {
			length : parseInt($rootScope.length),
			weeklySched : $stateParams.schedule
		}
	$rootScope.classes = classesFactory.getClasses(queryObj)
	
	$scope.addToSchedule = function(classToAdd) {
		finalsFactory.addFinals(classToAdd);
		
	}

	$scope.download = function(){
		finalsFactory.downloadFinals()
	}

	$scope.classAddedToRS = function(key){
		var checker = finalsFactory.obtainFinals()
  		for (var i = 0; i < checker.length; i++) {
    		if (checker[i].$$hashKey === key) {
      			return true;
    		}
  		}
  		return false;
	}
})


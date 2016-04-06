app.controller('classCtrl', function($scope, $rootScope, 
	$stateParams,  $state, classesFactory, finalsFactory) {
	var queryObj = {
			length : parseInt($rootScope.length),
			weeklySched : $stateParams.schedule
		}
		
	$rootScope.classes = classesFactory.getClasses(queryObj)
	
	$scope.addToSchedule = function(classToAdd) 
	{
		// console.log(finalsFactory.obtainFinals())
		finalsFactory.addFinals(classToAdd);
		return finalsFactory.obtainFinals().length
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


	$scope.updateFile = function(deleteClass) {
		$scope.addToSchedule(deleteClass);
		finalsFactory.downloadFinals();
	}

	$scope.finalsAdded = finalsFactory.obtainFinals();
})


app.controller('MainCtrl', function($scope, scheduleFactory, classesFactory){
	$scope.belowFour = function(curr){
		if (curr < 4) return curr
	}

	$scope.belowSeven = function(curr){
		if (curr >= 4) return curr - 1;
	}

	$scope.weeklySchedule = function(num){
		$scope.classes = []
		$scope.schedules = []
		$scope.length = num
		$scope.schedules = scheduleFactory.getClassesSchedule(num)
	},

	$scope.getClasses = function(string){
		var queryObj = {
			length : $scope.length,
			weeklySched : string 
		}

		$scope.classes = classesFactory.getClasses(queryObj)		
	}

});
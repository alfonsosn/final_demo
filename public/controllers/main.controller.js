app.controller('MainCtrl', function($scope, scheduleFactory, classesFactory){
	$scope.belowFour = function(curr){
		if (curr <= 4) return curr
	}

	$scope.belowSeven = function(curr){
		if (curr > 4) return curr
	}


	$scope.weeklySchedule = function(int){
		$scope.classes = [];
		$scope.schedules = [];
		scheduleFactory.getClassesSchedule(int)
		.then(function(data) {
			$scope.length = int;
			$scope.schedules = data;
		})
	},

	$scope.getClasses = function(string){
		var queryObj = {
			length : $scope.length,
			weeklySched : string 
		}

		classesFactory.getClasses(queryObj)
		.then(function(data) {
			$scope.classes = data;
		})
	}

});
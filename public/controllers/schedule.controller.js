app.controller('schedCtrl', function($scope, classesFactory, $rootScope) {
	$scope.belowFour = function(curr){
		if (curr < 4) return curr
	}

	$scope.belowSeven = function(curr){
		if (curr >= 4) return curr - 1;
	}

	$scope.getClasses = function(string){
		var queryObj = {
			length : $scope.length,
			weeklySched : string
		}
		$rootScope.classes = classesFactory.getClasses(queryObj)
		console.log($rootScope.classes)
	}
})

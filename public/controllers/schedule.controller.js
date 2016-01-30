app.controller('schedCtrl', function($scope, classesFactory, $rootScope) {
	$scope.belowFour = function(curr){
		if (curr < 4) return curr
	}

	$scope.belowSeven = function(curr){
		if (curr >= 4) return curr - 1;
	}
})
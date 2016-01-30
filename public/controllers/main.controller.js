app.controller('MainCtrl', function($scope, $rootScope, 
	scheduleFactory, $state, 
	$location, $anchorScroll){

	$scope.clear = function(){
		$rootScope.schedule = []
		$rootScope.classes  = []
	}

   	$scope.scrollTo = function(id) {
      	$location.hash(id);
      	$anchorScroll();
  	}

	$scope.jumpback = function(){
		$scope.clear();
		$state.transitionTo('home');
		$scope.scrollTo('page-header');
	}

  	//factory calls
	$scope.weeklySchedule = function(){
		$rootScope.schedule = scheduleFactory.createSchedule($rootScope.length)
	}
});

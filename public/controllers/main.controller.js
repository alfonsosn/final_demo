app.controller('MainCtrl', function($scope, $rootScope, 
	scheduleFactory, $state, finalsFactory,
	$location, $anchorScroll){

	$rootScope.finalsSchedule = []

	$scope.clear = function(){
		finalsFactory.clearFinals();
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

	$scope.download = function(){
		finalsFactory.downloadFinals()
	}

	$scope.jumpfwd = function(){
		finalsFactory.downloadFinals();
		console.log("what the fuck")
		$state.transitionTo('calendar');
	};


  	//factory calls
	$scope.weeklySchedule = function(){
		$rootScope.schedule = scheduleFactory.createSchedule($rootScope.length)
	}
});

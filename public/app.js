var app = angular.module('Finals', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/buttons.html'
			})
			.state('classLength', {
				url: '/:hours',
				controller: function($rootScope, $stateParams, $state, scheduleFactory){
					$rootScope.length = $stateParams.hours;
					$rootScope.schedule = scheduleFactory.createSchedule(parseInt($rootScope.length))
				},
				templateUrl: 'templates/schedule.html'
			})
			.state('classLength.schedule', {
				url: '/:schedule',
		      	controller: function($rootScope, $stateParams, classesFactory) {
		      		var queryObj = {
							length : parseInt($rootScope.length),
							weeklySched : $stateParams.schedule
						}
		      		$rootScope.classes = classesFactory.getClasses(queryObj)
		      	},
		      	templateUrl: 'templates/finals.html'	
			})
		}) 
	.run(['$state', function ($state) {
		$state.transitionTo('home');
	}])


var app = angular.module('Finals', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/buttons.html'
			})
			.state('calendar',{
				url: '/calendar',
				controller: 'classCtrl',
				templateUrl: 'templates/calendar.html'
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
		      	controller: 'classCtrl',
		      	templateUrl: 'templates/finals.html'
			})
		}) 
	.run(['$state', function ($state) {
		$state.transitionTo('home');
	}])

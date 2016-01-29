var app = angular.module('Finals', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/buttons.html'
			})
			.state('schedule', {
				url: '/schedule',
				templateUrl: 'templates/schedule.html',
				controller: 'schedCtrl'
			})
			.state('final', {
				url: '/final',
				templateUrl: 'templates/finals.html'
			})
		}) 
	app.run(['$state', function ($state) {
		$state.transitionTo('home');
	}])


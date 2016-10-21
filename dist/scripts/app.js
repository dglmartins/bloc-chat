(function () {
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
		});
		
		$stateProvider
			.state('login', {
				url: '/',
			 	controller: 'AuthCtrl as auth',
				templateUrl: '/templates/login.html'
		})
				
			.state('chatApp', {
			url: '/chatApp',
			templateUrl: '/templates/main.html'
			
		});
		
		
		
	}
	
	angular
		.module('blocChat', ['firebase','ui.router', 'ui.bootstrap','ngCookies'])
		.config(config);
})();




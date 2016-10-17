(function () {
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
		});
		
		$stateProvider
			.state('chat', {
			url: '/',
			templateUrl: '/templates/main.html'
			
		});
		
		
		
	}
	
	angular
		.module('blocChat', ['firebase','ui.router', 'ui.bootstrap'])
		.config(config);
})();




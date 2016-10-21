(function() {
	function AuthFactory($firebaseAuth) {
		return $firebaseAuth();
	}
	
	angular
		.module('blocChat')
		.factory('AuthFactory', ['$firebaseAuth', AuthFactory]);
	
	
})();
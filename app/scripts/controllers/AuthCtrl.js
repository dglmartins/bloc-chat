(function() {
	function AuthCtrl($scope, AuthFactory) {
		this.auth = AuthFactory;
		console.log(this.auth);
		
		this.creatingNewUser = false;
		
		this.toggleLogIn = function(){
			if (this.creatingNewUser === false) {
				this.creatingNewUser = true;
			} else {
				this.creatingNewUser = false;
			}
		};
		this.auth.$onAuthStateChanged(function(firebaseUser) {
			$scope.firebaseUser = firebaseUser;
				
		});
		
		this.createUser = function(){
			
			this.message = null;
			this.error = null;
			this.auth.$createUserWithEmailAndPassword($scope.email, $scope.password).then(function(firebaseUser) {
				console.log(firebaseUser);
				firebaseUser.updateProfile({
					displayName: $scope.screenName
				}).then(function() {
					$scope.message = "User created with screen name: " + firebaseUser.displayName;
					console.log($scope.message);
				}).catch(function(error){
					alert(error);	
				});	


			}).catch(function(error) {
				alert(error);
			});

	
		};
		
		
		this.signIn = function() {
			this.auth.$signInWithEmailAndPassword($scope.email, $scope.password).then(function(firebaseUser) {
				$scope.message = "User created signed in with screen name: " + firebaseUser.displayName;
					console.log($scope.message);
			}).catch(function(error) {
				alert(error);
			});
			
			
		};
		
	}
	
	angular
		.module('blocChat')
		.controller('AuthCtrl',['$scope', 'AuthFactory', AuthCtrl]);
	
	
	
})();
(function() {
	function AuthCtrl($scope, $state, AuthFactory) {
		this.auth = AuthFactory;
	
	
	
		
		this.creatingNewUser = false;
		this.forgotPassword = false;
		
		this.toggleLogIn = function(){
			if (this.creatingNewUser === false) {
				this.creatingNewUser = true;
			} else {
				this.creatingNewUser = false;
			}
		};
		
		this.toggleForgotPassword = function(){
			if (this.forgotPassword === false) {
				this.forgotPassword = true;
			} else {
				this.forgotPassword = false;
			}
		};
		
		this.auth.$onAuthStateChanged(function(firebaseUser) {
			$scope.firebaseUser = firebaseUser;
			if (firebaseUser) {
				$state.go('chatApp');
			}
			
				
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
				
				}).catch(function(error){
					alert(error);	
				});	

				$state.go('chatApp');
			}).catch(function(error) {
				alert(error);
			});

	
		};
		
		
		this.signIn = function() {
			this.auth.$signInWithEmailAndPassword($scope.email, $scope.password).then(function(firebaseUser) {
				$scope.message = "User created signed in with screen name: " + firebaseUser.displayName;
					
				$state.go('chatApp');
				
			}).catch(function(error) {
				alert(error);
			});
			
			
		};
		
		this.resetPass = function() {
			var emailAddress = $scope.emailForReset;	AuthFactory.$sendPasswordResetEmail(emailAddress).then(function() {
				alert("Password reset email sent to " + emailAddress +"!" );
			}).catch(function(error) {
				alert("Error: " + error);
			});
		};
			
		
	}
	
	angular
		.module('blocChat')
		.controller('AuthCtrl',['$scope', '$state', 'AuthFactory', AuthCtrl]);
	
	
	
})();
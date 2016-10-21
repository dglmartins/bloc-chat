//(function() {
//	function ModalUsernameCtrl($scope, $cookies, $uibModal, $timeout) {
//		
//		$scope.username = $cookies.get('blocChatCurrentUser');
//		
//		this.open = function(){ 
//			$uibModal.open({
//			animation: true,
//			ariaLabelledBy: 'modal-title',
//			ariaDescribedBy: 'modal-body',
//			templateUrl: '/templates/modalUsername.html',
//			backdrop : 'static',
//			keyboard : false,
//			controller: 'ModalUsernameCtrl',
//			controllerAs: 'modalUsername'
//			});
//		};
//		
//
//		this.close = function(){
//			if ($scope.username === undefined) {
//				alert("Please enter a username");
//			} else {
//				var username = $scope.username;
//				$scope.$close();
//				$cookies.put('blocChatCurrentUser', username)	
//			}
//			
//		};
//		
//	
//	}
//	
//	angular
//		.module('blocChat')
//		.controller('ModalUsernameCtrl', ['$scope','$cookies','$uibModal','$timeout', ModalUsernameCtrl]);
//	
//	
//	
//})();
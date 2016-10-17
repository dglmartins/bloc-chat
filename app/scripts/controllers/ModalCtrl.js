(function() {
	function ModalCtrl($scope, $uibModal, $firebaseArray) {
	
	
		
	this.open = function() {
			$uibModal.open({
			animation: true,
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: '/templates/modal.html',
			controller: 'ModalCtrl',
			controllerAs: 'modal',
    		});
			
		}
		
		
	this.close = function(){
		if($scope.roomName === undefined) {
			$scope.$close();
		} else if ($scope.roomName.length > 12) {
			alert("Please try again, creating a Room name with maximum 11 characters");
			
			
		} else {
			var ref = firebase.database().ref().child("rooms");
			var rooms = $firebaseArray(ref);
			var roomExists = false;
			
			rooms.$loaded(function(){
				if (rooms.length > 0) {
					for (let i = 0; i < rooms.length; i++) {
						if (rooms[i].$value === $scope.roomName) {
							roomExists = true;
						}
						
					}	
				}
			
			if (roomExists) {
				alert("This room already exists. Please try another name");
			} else {
				rooms.$add($scope.roomName);
				$scope.$close();				
			}
			});
					
		}
		
	};
	
	this.dismiss = function(){
		$scope.$dismiss();
	}
		
	
			
	
		
	};
	
	angular
		.module('blocChat')
		.controller('ModalCtrl', ['$scope', '$uibModal', '$firebaseArray', ModalCtrl]);
	
	
	
})();


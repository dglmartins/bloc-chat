(function() {
	function Room($firebaseArray) {
		var ref = firebase.database().ref().child("rooms");
		var messages = firebase.database().ref().child("messages");
		
		var rooms = $firebaseArray(ref);
		
		
		
		return {
			all: rooms,
			
			create: function($scope, newRoom) {
			
				var roomExists = false;

				rooms.$loaded(function(){
					if (rooms.length > 0) {
						for (let i = 0; i < rooms.length; i++) {
							if (rooms[i].$value === newRoom) {
								roomExists = true;
							}

						}	
					}

				if (roomExists) {
					alert("This room already exists. Please try another name");
				} else {
					console.log(rooms);
					rooms.$add(newRoom);
					console.log(rooms);
					$scope.$close();				
				}
				});
			},
			
			getMessages: function(roomId) {
				return $firebaseArray(messages.orderByChild('roomId').equalTo(roomId));
			}
			
			
		};
	
	}
	
	
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
	
})();
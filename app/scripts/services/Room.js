(function() {
	function Room($firebaseArray) {
		var ref = firebase.database().ref().child("rooms");
		
		var rooms = $firebaseArray(ref);
		
		if (rooms.length === 0) {
			rooms = ["Room1", "Room2"];
			console.log(rooms);
		}
		
		return {
			all: rooms
		};
	
	}
	
	
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
	
})();
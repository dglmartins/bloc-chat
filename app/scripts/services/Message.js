(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child('messages');
		var messages = $firebaseArray(ref);
		
		return {
			send: function(newMessage, roomId, sentAt, username) {
				
				messages.$add({content: newMessage, roomId: roomId, sentAt: sentAt, username: username});
			}
			
		};
		
	}
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message])
	
	
	
})();
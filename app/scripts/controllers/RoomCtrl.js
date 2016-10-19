(function() {
 	function RoomCtrl($scope, $window, Room, Message, RoomView, $cookies) {
		
		
		this.room = Room;
		this.roomSelected = false;
		this.message = Message;
		
		
		
		
		this.roomView = RoomView;
		//this.viewWidth = RoomView.width;
		//console.log(this.viewWidth);
		
		this.dynamicCss = function() {
			RoomView.dynamicCss($scope, $window);
		};
		
		this.dynamicCss();
		
		
		angular.element($window).bind('resize', function () {
    		RoomView.dynamicCss($scope, $window);
			var delay = setTimeout(showText, 200);
				function showText() {
					RoomView.dynamicCss($scope, $window);
				}
			
		});
		
		
		this.activateRoom = function(room) {
			this.activeRoom = room;
			this.roomSelected = true;
			this.dynamicCss();
		};
		
		this.getMessages = function(roomId) {
			this.messages = this.room.getMessages(roomId);
			
		};
		
		this.sendMessage = function() {
			var d = new Date();
			var time = d.toTimeString();
			var day = d.toDateString();
			var dateTime = time + "on " + day;
			var username = $cookies.get('blocChatCurrentUser');
			this.message.send($scope.messageToSend, this.activeRoom.$id, dateTime, username);
			$scope.messageToSend = "";
		};
		
		
		
		
	}
 
 	angular
		.module('blocChat')
		.controller('RoomCtrl', ['$scope', '$window', 'Room','Message','RoomView', '$cookies', RoomCtrl]);
	
 })();
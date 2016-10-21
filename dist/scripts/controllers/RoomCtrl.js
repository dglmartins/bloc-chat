(function() {
 	function RoomCtrl($scope, $state ,$window, Room, Message, RoomView, AuthFactory, $firebaseArray) {
		
		this.auth = AuthFactory;
		this.room = Room;
		this.roomSelected = false;
		this.message = Message;
		
		this.auth.$onAuthStateChanged(function(firebaseUser) {
			$scope.firebaseUser = firebaseUser;
				
		});
		
		
		
		
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
			this.messages.$watch(function(){
				RoomView.autoScrollMessages();
			});
			RoomView.autoScrollMessages();
		};
		
		
		
		this.sendMessage = function() {
			var d = new Date();
			var time = d.toTimeString();
			var day = d.toDateString();
			var dateTime = time + "on " + day;
			var username = $scope.firebaseUser.displayName;
			this.message.send($scope.messageToSend, this.activeRoom.$id, dateTime, username);
			$scope.messageToSend = "";
						
		};
		
		this.signOut = function() {
			this.auth.$signOut();
			$state.go('login');
			location.reload();
		};
		
		
		
		
		
		
	}
 
 	angular
		.module('blocChat')
		.controller('RoomCtrl', ['$scope','$state','$window', 'Room','Message','RoomView','AuthFactory','$firebaseArray', RoomCtrl]);
	
 })();
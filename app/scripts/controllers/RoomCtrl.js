(function() {
 	function RoomCtrl($scope, $window, Room, RoomView) {
		
		this.room = Room;
		this.roomView = RoomView;
		//this.viewWidth = RoomView.width;
		//console.log(this.viewWidth);
		
		this.dynamicCss = function() {
			RoomView.dynamicCss($scope, $window);
		};
		
		this.dynamicCss();
		
		
		angular.element($window).bind('resize', function () {
    		RoomView.dynamicCss($scope, $window);
			var delay = setTimeout(showText, 300);
				function showText() {
					RoomView.dynamicCss($scope, $window);
				}
		});
		
		
	}
 
 	angular
		.module('blocChat')
		.controller('RoomCtrl', ['$scope', '$window', 'Room','RoomView', RoomCtrl]);
	
 })();
(function() {
	function RoomView(){
		var RoomView = {};
		
		
		RoomView.dynamicCss = function($scope, $window) {
			$scope.width = ($window.innerWidth);
			$scope.sidebar = document.getElementsByClassName("room-nav");
			$scope.title = document.getElementsByClassName("sidebar-title");
			$scope.button = document.getElementsByClassName("button");
			$scope.table = document.getElementsByClassName("table-container");
			$scope.openRooms = document.getElementsByClassName("open-rooms-title");
			$scope.arrowIcon = document.getElementsByClassName("arrow-icon");
			$scope.activeRoom = document.getElementsByClassName("active-room");
			if ($scope.width < 700) {
				
				$scope.title[0].style.left = "45px";
				$scope.title[0].style.width = "calc(100% - 45px)";
				
				$scope.button[0].style.display = "none";
				$scope.table[0].style.display = "none";
				$scope.openRooms[0].style.display = "none";
				$scope.activeRoom[0].style.left = "45px";
				$scope.activeRoom[0].style.width = "calc(100% - 45px)";
				
				var delay = setTimeout(hide, 200);
				function hide() {
					$scope.sidebar[0].style.width = "45px";
					$scope.sidebar[0].style.cursor = "pointer";

					$scope.arrowIcon[0].style.display = "block";
					$scope.title[0].style.left = "45px";
					$scope.title[0].style.width = "calc(100% - 45px)";
					$scope.button[0].style.display = "none";
					$scope.table[0].style.display = "none";
					$scope.openRooms[0].style.display = "none";
					$scope.activeRoom[0].style.left = "45px";
					$scope.activeRoom[0].style.width = "calc(100% - 45px)";
				}
			} else {
				
				$scope.sidebar[0].style.width = "210px";
				$scope.sidebar[0].style.cursor = "auto";
				$scope.arrowIcon[0].style.display = "none";
				$scope.title[0].style.left = "0px";
				$scope.title[0].style.width = "100%";
				$scope.activeRoom[0].style.left = "210px";
				$scope.activeRoom[0].style.width = "calc(100% - 210px)";
				
				var delay = setTimeout(show, 200);
				function show() {
					
					
					$scope.button[0].style.display = "block";
					$scope.openRooms[0].style.display = "block";
					$scope.table[0].style.display = "block";
					
					
				}
				
			}
			
		};
		
		RoomView.showSidebar = function() {
			
			var sidebar = document.getElementsByClassName("room-nav");
			var title = document.getElementsByClassName("sidebar-title");
			var button = document.getElementsByClassName("button");
			var table = document.getElementsByClassName("table-container");
			var openRooms = document.getElementsByClassName("open-rooms-title");
			var arrowIcon = document.getElementsByClassName("arrow-icon");
			var activeRoom = document.getElementsByClassName("active-room");
			
			sidebar[0].style.width = "210px";
			sidebar[0].style.cursor = "auto";
			activeRoom[0].style.left = "210px";
			activeRoom[0].style.width = "calc(100% - 210px)";
			
				
				var delay = setTimeout(showText, 200);
				function showText() {
					title[0].style.left = "0px";
					title[0].style.width = "100%";
					button[0].style.display = "block";
					openRooms[0].style.display = "block";
					table[0].style.display = "block";
					arrowIcon[0].style.display = "none";
					
				}
			
			
		};
		
		
		
		
		
		
		return RoomView;	
		
		
	}
	
	angular
		.module('blocChat')
		.factory('RoomView', RoomView);
	
	
	
	
})();
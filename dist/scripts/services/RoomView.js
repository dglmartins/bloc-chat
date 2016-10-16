(function() {
	function RoomView(){
		var RoomView = {};
		
		
		RoomView.dynamicCss = function($scope, $window) {
			$scope.width = ($window.innerWidth);
			$scope.sidebar = document.getElementsByClassName("room-nav");
			$scope.title = document.getElementsByClassName("sidebar-title");
			$scope.button = document.getElementsByClassName("button");
			$scope.table = document.getElementsByClassName("room-list");
			$scope.arrowIcon = document.getElementsByClassName("arrow-icon");
			if ($scope.width < 700) {
				
					
				
				$scope.sidebar[0].style.width = "45px";
				$scope.sidebar[0].style.cursor = "pointer";
				$scope.title[0].style.display = "none";
				$scope.button[0].style.display = "none";
				$scope.table[0].style.display = "none";
				$scope.arrowIcon[0].style.display = "block";
			} else {
				
				$scope.sidebar[0].style.width = "210px";
				$scope.sidebar[0].style.cursor = "auto";
				
				var delay = setTimeout(showText, 300);
				function showText() {
					$scope.title[0].style.display = "block";
					$scope.button[0].style.display = "block";
					$scope.table[0].style.display = "";
					$scope.arrowIcon[0].style.display = "none";
					
				}
				
			}
			
		};
		
		RoomView.showSidebar = function() {
			
			var sidebar = document.getElementsByClassName("room-nav");
			var title = document.getElementsByClassName("sidebar-title");
			var button = document.getElementsByClassName("button");
			var table = document.getElementsByClassName("room-list");
			var arrowIcon = document.getElementsByClassName("arrow-icon");
			
			sidebar[0].style.width = "210px";
			sidebar[0].style.cursor = "auto";
				
				var delay = setTimeout(showText, 300);
				function showText() {
					title[0].style.display = "block";
					button[0].style.display = "block";
					table[0].style.display = "";
					arrowIcon[0].style.display = "none";
					
				}
			
			
		};
		
		
		
		
		
		
		return RoomView;	
		
		
	}
	
	angular
		.module('blocChat')
		.factory('RoomView', RoomView);
	
	
	
	
})();
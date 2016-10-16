(function() {
	function RoomView(){
		var RoomView = {};
		
		RoomView.dynamicCss = function($scope, $window) {
			$scope.width = ($window.innerWidth);
			$scope.sidebar = document.getElementsByClassName("room-nav");
			$scope.title = document.getElementsByClassName("sidebar-title");
			$scope.button = document.getElementsByClassName("button");
			$scope.table = document.getElementsByClassName("room-list");
			if ($scope.width < 700) {
				$scope.sidebar[0].style.width = "45px";
				$scope.title[0].style.display = "none";
				$scope.button[0].style.display = "none";
				$scope.table[0].style.display = "none";
			} else {
				$scope.sidebar[0].style.width = "210px";
				
				var delay = setTimeout(showText, 300);
				function showText() {
					$scope.title[0].style.display = "block";
					$scope.button[0].style.display = "block";
					$scope.table[0].style.display = "";
				}
				
			}
			
		};
		
		RoomView.showSidebar = function() {
			var sidebar = document.getElementsByClassName("room-nav");
			var title = document.getElementsByClassName("sidebar-title");
			var button = document.getElementsByClassName("button");
			var table = document.getElementsByClassName("room-list");
			
			sidebar[0].style.width = "210px";
				
				var delay = setTimeout(showText, 300);
				function showText() {
					title[0].style.display = "block";
					button[0].style.display = "block";
					table[0].style.display = "";
				}
			console.log("works");
		};
		
		
		
		
		
		
		return RoomView;	
		
		
	}
	
	angular
		.module('blocChat')
		.factory('RoomView', RoomView);
	
	
	
	
})();
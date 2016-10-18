(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
		
		$uibModal.open({
			animation: true,
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: '/templates/modalUsername.html',
			backdrop : 'static',
			keyboard : false,
			controller: 'ModalUsernameCtrl',
			controllerAs: 'modalUsername'
		});
    }
	  
  }

  angular
    .module('blocChat')
    .run(['$cookies','$uibModal', BlocChatCookies]);
})();
crtl.controller('AdminCtrl', function($scope, $state, $ionicPopup, AuthService, AUTH_EVENTS) {
  $scope.data = {};
  $scope.logout = function() {
    AuthService.logout();
    $state.go('appwelcome');
  };
});
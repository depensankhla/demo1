app = angular.module('starter', ['ionic', 'starter.controllers','ngMockE2E','ngCordova']);
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});


app.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  .state('loginAsCompany', {
    url: '/loginAsCompany',
    templateUrl: 'templates/loginAsCompany.html',
    controller: 'LoginCtrl'
  })
  .state('loginAsUser', {
    url: '/loginAsUser',
    templateUrl: 'templates/loginAsUser.html',
    controller: 'LoginCtrl'
  })
  .state('RegisterAsCompany', {
    url: '/RegisterAsCompany',
    templateUrl: 'templates/RegisterAsCompany.html',
    controller: 'LoginCtrl'
  })
  .state('RegisterAsUser', {
    url: '/RegisterAsUser',
    templateUrl: 'templates/RegisterAsUser.html',
    controller: 'LoginCtrl'
  })
  .state('appwelcome', {
    url: '/appwelcome',
    templateUrl: 'templates/appwelcome.html'
  });  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/appwelcome');
});


app.run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
  $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {

    if ('data' in next && 'authorizedRoles' in next.data) {
      var authorizedRoles = next.data.authorizedRoles;
      if (!AuthService.isAuthorized(authorizedRoles)) {
        event.preventDefault();
        $state.go($state.current, {}, {reload: true});
        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
      }
    }

    if (!AuthService.isAuthenticated()) {
      if (next.name !== 'appwelcome') {
        if(next.name == 'loginAsCompany')
        {

        }else if(next.name == 'loginAsUser')
        {

        }else if(next.name == 'RegisterAsCompany')
        {
          
        }else if(next.name == 'RegisterAsUser')
        {
          
        }else
        {
        event.preventDefault();
        $state.go('appwelcome');
        }
      }
    }
  });
});
app.run(function($httpBackend){
    //load all schemeshttp://utillix.com/4
    
  $httpBackend.whenGET(/http:\/\/utillix.com\/basic\/*/)
   .passThrough();

 $httpBackend.whenPOST(/http:\/\/utillix.com\/basic\/*/)
   .passThrough();

  $httpBackend.whenGET(/templates\/\w+.*/).passThrough();
});

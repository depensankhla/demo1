app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('leftnav', {
    url: '/leftnav',
    abstract: true,
    templateUrl: 'templates/admin/leftnav.html',
    controller: 'AdminCtrl'
  })

  .state('leftnav.searchPipes', {
    url: '/searchPipes',
    views: {
      'menuContent': {
        templateUrl: 'templates/admin/searchpipes.html'
      }
    }
  })

  .state('leftnav.manageProjets', {
      url: '/manageProjets',
      views: {
        'menuContent': {
          templateUrl: 'templates/admin/manageprojets.html'
        }
      }
    })

  .state('leftnav.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/admin/settings.html'
        }
      }
  })

  .state('leftnav.gallery', {
      url: '/gallery',
      views: {
        'menuContent': {
          templateUrl: 'templates/admin/gallery.html'
        }
      }
  })

  .state('leftnav.aboutus', {
      url: '/aboutus',
      views: {
        'menuContent': {
          templateUrl: 'templates/admin/aboutus.html'
        }
      }
  });
 
});

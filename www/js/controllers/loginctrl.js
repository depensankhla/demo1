crtl.controller('LoginCtrl', function($scope, $state, $ionicPopup,$ionicLoading, AuthService, AUTH_EVENTS,CompanyService) {
  $scope.data = {};
  $scope.login = function(data) {
    
  var useremail =  document.getElementById('username').value;
  var userpass =  document.getElementById('password').value;
 
  if(useremail === '' || userpass === '' )
  {
    $scope.error_msg =true;
    $scope.error ="Email & Password required";
    return false;
  }

    $ionicLoading.show({
      template: 'Loading...'
    });
    AuthService.login(data.username, data.password).then(function(authenticated) {
      $state.go('leftnav.searchPipes', {}, {reload: true});
      $scope.setCurrentUsername(data.username);
      $ionicLoading.hide();
    }, function(err) {
      $ionicLoading.hide();
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials!'
      });
    });
  };  

  $scope.setCurrentUsername = function(name) {
    $scope.username = name;
  };

  $scope.logout = function() {
    AuthService.logout();
    $state.go('login');
  };

  //registerAscompany
  $scope.registerAscompany =function(company){
      var cname = document.getElementById('cname');
      var cemail = document.getElementById('cemail');
      var caddress = document.getElementById('caddress');
      var ccity = document.getElementById('ccity');
      var cstate = document.getElementById('cstate');
      var ccountry = document.getElementById('ccountry');
      var czip = document.getElementById('czip');
      
      if(cname.value === '')
      {
          $scope.rquired_cname = true;
          return false;
      }
      if(cemail.value === '')
      {
          $scope.rquired_cemail = true;
          return false;
      }

      if(caddress.value === '')
      {
          $scope.rquired_caddress = true;
          return false;
      }
      if(ccity.value === '')
      {
          $scope.rquired_ccity = true;
          return false;
      }
      if(cstate.value === '')
      {
          $scope.rquired_cstate = true;
          return false;
      }
      if(ccountry.value === '')
      {
          $scope.rquired_ccountry = true;
          return false;
      }
      if(czip.value === '')
      {
          $scope.rquired_czip = true;
          return false;
      }
      
  };

  //show hide company select
  $scope.showhideCompanySelect = function(selectedoption){
    
    $scope.companyListShow = false;
    if(selectedoption === 'individial')
    {
      $scope.companyListShow = false;
    
    }else{
      $scope.companyListShow = true;
      
      $ionicLoading.show({
        template: 'Loading...'
      });
      CompanyService.loadCompanyList().then(function(res){
        $scope.companys = res.result;
      },function(err){
        console.log("error 2");
      });

      $ionicLoading.hide();
     }

  };

});
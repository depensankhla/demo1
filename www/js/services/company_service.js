angular.module('starter') 
.service('CompanyService', function($q, $http) {

  var loadCompanyList = function() {
    return $q(function(resolve, reject) {
            var req = {
             method: 'GET',
             url: 'http://utillix.com/basic/getAllCompaniesList',
             headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
            };  
            $http(req).then(function(response){
               if(response.data[0].response == 'Success')
                {
 
                   resolve(response.data[0]);

                }else
                {
                     reject("error");
                }

            },function(err){
                   reject(err);
            });
      
    });
  };

  return {
    loadCompanyList: loadCompanyList,
  };


});
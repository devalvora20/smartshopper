
angular.module('smartShopper')
.controller('logoutCtrl',['$location','$rootScope', logoutCtrl])

function logoutCtrl($location,$rootScope){
     console.log('in logout ctrl')
            console.log('insdie logout ctl')
               $rootScope.user=undefined;
               $location.path("/");
}

angular.module('smartShopper')
.controller('logoutCtrl',['$location','$rootScope','shoppingCartSvc', logoutCtrl])

function logoutCtrl($location,$rootScope,shoppingCartSvc){
     console.log('in logout ctrl')
            console.log('insdie logout ctl')
            $rootScope.cartItemsCount=undefined;
               $rootScope.user=undefined;
               shoppingCartSvc.resetCart();
               $location.path("/");
}
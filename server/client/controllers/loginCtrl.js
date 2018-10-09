
angular.module('smartShopper')
.controller('loginCtrl', 
['$scope', '$http', 'remote_host',
 'remote_host_port','$location','$rootScope','$routeParams','ProductSvc','shoppingCartSvc', loginCtrl])

function loginCtrl($scope,$http,remote_host,
    remote_host_port,$location,$rootScope,$routeParams,ProductSvc,shoppingCartSvc){

     $scope.user ={
         email:"abc@abc.com",
         password:"pass@123"
     }
      $scope.doLogin = function(){
          console.log("route params"+$routeParams.product_id)
         if($routeParams.product_id){
             console.log('calling service')
             ProductSvc.getProductById($routeParams.product_id)
                       .then(p=>{
                           console.log("result from service:")
                           console.log(p[0]);
                           shoppingCartSvc.addToCart(p[0])

                           $location.search({product_id:null})
                       })
         }


          console.log($scope.user);
          const url = `http://${remote_host}:${remote_host_port}/api/smartshopper/user/loginCheck`
          if(($scope.user) && ($scope.user.email && $scope.user.email.length>0) && 
          ($scope.user.password&&$scope.user.password.length>0)) {
          console.log("login click")
             const data = {
              email:$scope.user.email,
              password:$scope.user.password
             }
           $http.post(url,data).then(({data})=>{
               console.log(data)
               $rootScope.user=data;
               $location.path("/");

           }).catch((err)=>{ 
               console.log(err)
               $scope.errorMessage="Invalid credentials"

           })
        }

          else
          $scope.errorMessage="All fields to be filled"

      }
}
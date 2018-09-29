
angular.module('smartShopper')
.controller('loginCtrl', 
['$scope', '$http', 'remote_host', 'remote_host_port','$location','$rootScope', loginCtrl])

function loginCtrl($scope,$http,remote_host,remote_host_port,$location,$rootScope){

     $scope.user ={
         email:"abc@abc.com",
         password:"pass@123"
     }
      $scope.doLogin = function(){
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

           }).catch((err)=> console.log(err))
        }

          else
          console.log("fill form")
      }
}
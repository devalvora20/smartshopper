
angular.module('smartShopper').controller('homeCtrl',
 ['remote_host','remote_host_port','$http','$scope', homeCtrl])

function homeCtrl(remote_host,remote_host_port,$http,$scope){

    console.log("home ctrl")
    const url = `http://${remote_host}:${remote_host_port}/api/smartshopper/products`
     $http.get(url)
      .then(({data})=>{
          console.log(data);

         $scope.products = data;

      })
      .catch(err=>{
          console.log(err);
      })
         
}
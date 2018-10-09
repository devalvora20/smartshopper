
angular.module('smartShopper')
.factory('ProductSvc',['$rootScope','$http',productSvc]);


function productSvc($rootScope,$http){
   var obj={};

      obj.getProductById = function(product_id){
       return new Promise((resolve,reject)=>{

        $http.get(`http://localhost:9000/api/smartshopper/products/${product_id}`)
             .then(resp=>{
                 
                 resolve(resp.data);
             })
       })

      }

    return obj;
}

angular.module('smartShopper').controller('homeCtrl',
 ['remote_host','remote_host_port','$http',
 '$scope','$rootScope','$timeout','$location','shoppingCartSvc', homeCtrl])

function homeCtrl(remote_host,remote_host_port,$http,
    $scope,$rootScope,$timeout,$location,shoppingCartSvc){

   
        $rootScope.cartItems= shoppingCartSvc.getCartItems();
    //console.log($rootScope.cartItems)
    /*
    if(!$rootScope.cartItems)
       $rootScope.cartItems =[];*/
     
    $scope.hasItemAdded =false;

    $scope.viewCart = function(){
        console.log("inside view cart..")
        $location.path('/cart')

    }
    

    $scope.addToCart = function(product){
        
        
        if(!$rootScope.user){
             $location.path('/login').search({product_id:product.product_id})
             return;
        }

        $scope.modalId='#myModal';

        shoppingCartSvc.addToCart(product)
        $rootScope.cartItems= shoppingCartSvc.getCartItems();
       /*
        for(var i=0;i<$rootScope.cartItems.length;i++){
            if($rootScope.cartItems[i].product_id==product.product_id){
                $rootScope.cartItems[i].quantity+=1;
              return ;
            }
        }
        product.quantity = 1;
        $rootScope.cartItems.push(product);

        console.log("cart items")
        console.log($rootScope.cartItems)
      */
    
        $scope.hasItemAdded =true;

    }

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
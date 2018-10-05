
angular.module('smartShopper')
      .factory('shoppingCartSvc',['$rootScope',shoppingCartSvc]);

    
     function shoppingCartSvc($rootScope){
       var cartItems =[];
          var obj={};
          console.log("inside service")
          obj.addToCart = function(product){

            var productAddedBefore=false;
            console.log("add in service")
            for(var i=0;i<cartItems.length;i++){
                if(cartItems[i].product_id==product.product_id){
                    cartItems[i].quantity+=1;
                  productAddedBefore=true;
                }
            }
            if(!productAddedBefore) {
            product.quantity = 1;
            cartItems.push(product);
            }



          }

          obj.removetItemAt=function(index){
            cartItems.splice(index,1);

          }

          obj.getCartItems = function(){
              return cartItems;
          }
             
          obj.saveCart = function(){
            console.log( $rootScope.user);

          }
          obj.resetCart = function(){
            cartItems=[];
 
          }

          return obj;
      }
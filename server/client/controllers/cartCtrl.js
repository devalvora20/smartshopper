
angular.module('smartShopper')
       .controller('cartCtrl',['$scope','$rootScope','$http','shoppingCartSvc',cartCtrl]);


       function cartCtrl($scope,$rootScope,$http,shoppingCartSvc){
           console.log("inside cart ctrl");
           console.log($rootScope.cartItems)

            $scope.deleteItem = function(itemIndex){
                console.log(itemIndex)
                if(confirm("do you want to deleted?")){
                shoppingCartSvc.removetItemAt(itemIndex)
                }
            

            }

            $scope.placeOrder = function(){
                const userId = $rootScope.user.id;
                console.log("placing an order")
                console.log(userId)
                shoppingCartSvc.placeOrder(userId)
                              .then((orderId)=>{
                                //  a//lert(orderId)
                                  $scope.order = orderId
                                  $scope.$apply();
                              })
            }

           $scope.saveCartItems=function(){
               console.log("calling server..saving data")
               shoppingCartSvc.saveCart();
           }

       }

angular.module('smartShopper')
  .factory('shoppingCartSvc', ['$rootScope','$http','remote_host',
  'remote_host_port', shoppingCartSvc]);


function shoppingCartSvc($rootScope,$http,remote_host,remote_host_port) {
  var cartItems = [];

  var obj = {};
  console.log("inside service")
  obj.addToCart = function (product) {

    var productAddedBefore = false;
    console.log("add in service")
    for (var i = 0; i < cartItems.length; i++) {
      if (cartItems[i].product_id == product.product_id) {
        cartItems[i].quantity += 1;
        productAddedBefore = true;
      }
    }
    if (!productAddedBefore) {
      product.quantity = 1;
      cartItems.push(product);
    }



  }

  obj.removetItemAt = function (index) {
    cartItems.splice(index, 1);

  }

  obj.getCartItems = function () {
    return cartItems;
  }


  obj.placeOrder = function (userId) {

    return new Promise((resolve, reject) => {
      let lineItemDto = [];
      cartItems.map(item => {
        lineItemDto.push({
          product_id: item.product_id,
          quantity: item.quantity
        })
      })
      const url = `http://${remote_host}:${remote_host_port}/api/smartshopper/user/${userId}/placeOrder`
      $http.post(url,lineItemDto)
           .then((resp)=>{
              console.log(resp.data)
              resolve(resp.data)
           }).catch(err=>reject(err))

    })
  }

  obj.saveCart = function () {
    console.log($rootScope.user);

  }
  obj.resetCart = function () {
    cartItems = [];

  }

  return obj;
}
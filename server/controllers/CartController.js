

const BASE_URL = `/api/smartshopper`
const orderRepo = require('../repository/OrderRepository')

var cartController = function(){

    var controller={};

   
     
    controller.addToCart = function(app){

        app.post(BASE_URL+'/user/:userId/addToCart',(req,resp)=>{

            var data = req.body;

            var product = {};
            product.name= data.name;
            product.id = data.id;
            product.price = data.price;


          
            var userId = req.params.userId;
            orderRepo.addToCart(data.quantity,product,userId)
                    .then((cartId)=>{
                        resp.send(cartId);

                    })
                    .catch(err=>{
                        resp.status(500).send("Server Error");
                    })
             
        })

    }

   
    return controller;
}


module.exports = cartController();


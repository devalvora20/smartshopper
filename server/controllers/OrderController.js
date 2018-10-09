

const BASE_URL = `/api/smartshopper`
const orderRepo = require('../repository/OrderRepository')

var orderController = function(){

    var controller={};

   //
     
    controller.placeOrder = function(app){

        app.post(BASE_URL+'/user/:userId/placeOrder',(req,resp)=>{

            var userId= req.params.userId;
            var lineItems = req.body; // product id and qutantiy
            console.log(lineItems)
            orderRepo.placeOrder(userId,lineItems)
            .then((orderId)=>{
                resp.send(orderId);
            })
            .catch(err=>resp.status(500).send("server error"))
        })


    }
   
    return controller;
}


module.exports = orderController();


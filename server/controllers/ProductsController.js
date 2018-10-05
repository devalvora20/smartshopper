

const BASE_URL = `/api/smartshopper`
const productRepo = require('../repository/CategoryRepository')

var productController = function(){

    var controller={};
     
    controller.getProducts = function(app){

        app.get(BASE_URL+'/products',(req,resp)=>{


            productRepo.getProducts()
             .then(products=>{
                 resp.send(products);
             })
             .catch(()=>{
                 resp.status(500).send("Error");
             })

             
        })
        

    }

   
    controller.getProductsByid= function(app){
        app.get(BASE_URL+'/products/:productId',(req,resp)=>{

            var id = req.params.productId;
            productRepo.getProductsById(id)
             .then(product=>{
               
                 resp.send(product);

             })
             .catch(()=>{
                 resp.status(500).send("Error");
             })

             
        })
    }
    return controller;
}


module.exports = productController();


/*
   how to use swagger in nodejs
   1. https://github.com/Surnet/swagger-jsdoc/blob/master/docs/GETTING-STARTED.md
   2. https://mherman.org/blog/swagger-and-nodejs/
   3. this works: https://github.com/Surnet/swagger-jsdoc/blob/master/docs/GETTING-STARTED.md
*/
/**
 * @swagger
 *
 * definitions:
 *   ProductDTO:
 *     type: object
 *     required:
 *       - name
 *       - image
 *       - description
 *       - price
 *       - category
 *     properties:
 *       name:
 *         type: string
 *       image:
 *         type: string
 *       description:
 *         type: string
 *       price:
 *         type: string
 *       category:
 *         type: string
 * 
 */



/**
 * @swagger
 *
 * definitions:
 *   CategoryDTO:
 *     type: object
 *     required:
 *       - id
 *       - description
 *       - no_of_products
 *     properties:
 *       id:
 *         type: string
 *       description:
 *         type: string
 *       no_of_products:
 *         type: string
 * 
 */

 /**
 * @swagger
 * /api/smartshopper/category:
 *   get:
 *     description: list of category
 *     tags:    [Category]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: categoryArray
 *         schema:
 *           $ref: '#/definitions/CategoryDTO'  
 */

  /**
 * @swagger
 * /api/smartshopper/category/{categoryId}:
 *   get:
 *     description: list of category
 *     tags:    [Category]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: categoryId
 *         description: categoryId
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: single category
 *         schema:
 *           $ref: '#/definitions/CategoryDTO'  
 */



 /**
 * @swagger
 * /api/smartshopper/products:
 *   get:
 *     description: list of products
 *     tags:    [Product]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: products
 *         schema:
 *           $ref: '#/definitions/ProductDTO'  
 */

 /**
 * @swagger
 * /api/smartshopper/products/{productId}:
 *   get:
 *     description: list a specific product
 *     tags:    [Product]
 *     produces:
 *       - application/json
  *     parameters:
 *       - name: productId
 *         description: productId
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: products
 *         schema:
 *           $ref: '#/definitions/ProductDTO'  
 */

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

    controller.getCategory = function(app){
        app.get(BASE_URL+'/category',(req,resp)=>{

            
            productRepo.getCategories()
             .then(category=>{
               
                 resp.send(category);

             })
             .catch(()=>{
                 resp.status(500).send("Error");
             })

             
        })

    }

    controller.getCategoryById = function(app){
        app.get(BASE_URL+'/category/:categoryId',(req,resp)=>{

            let categoryId = req.params.categoryId;
            console.log(categoryId);
            console.log(req.params);
            productRepo.getCategoriesByid(categoryId)
             .then(category=>{
               
                 resp.send(category);

             })
             .catch(()=>{
                 resp.status(500).send("Error");
             })

             
        })

    }


    return controller;
}


module.exports = productController();


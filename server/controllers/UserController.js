/* https://github.com/Surnet/swagger-jsdoc/blob/master/example/v2/routes.js */
/*  3. this works: https://github.com/Surnet/swagger-jsdoc/blob/master/docs/GETTING-STARTED.md */

/**
 * @swagger
 *
 * definitions:
 *   RegistrationDTO:
 *     type: object
 *     required:
 *       - firstName
 *       - lastName
 *       - email
 *       - password
 *     properties:
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *         format: password
 *       email:
 *         type: string
 *         format: password
 *       password:
 *         type: string
 *         format: password 
 */



/**
 * @swagger
 *
 * definitions:
 *   UserLogin:
 *     type: object
 *     required:
 *       - email
 *       - password
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 *   User:
 *     type: object
 *     required:
 *       - firstName
 *       - lastName
 *       - id
 *     properties:
 *       firstName:
 *         type:string
 *       lastName:
 *         type:string
 *       id:
 *         type:string     
 */
  

/**
 * @swagger
 * /api/smartshopper/user/loginCheck:
 *   post:
 *     description: Login to the application
 *     tags:    [Login]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: UserLogin
 *         description: userobject.
 *         in: body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/UserLogin'
 *     responses:
 *       200:
 *         description: user
 *         schema:
 *           $ref: '#/definitions/User'  
 */

/**
 * @swagger
 * /api/smartshopper/user/registration:
 *   post:
 *     description: Register to the application
 *     tags:    [Registration]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: RegistrationDTO
 *         description: RegistrationDTO.
 *         in: body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/RegistrationDTO'
 *     responses:
 *       200:
 *         description: userId
 *         schema:
 *          type:string
 */



   

const BASE_URL = `/api/smartshopper`
const userRepo = require('../repository/UserRepository')
var userController = function(){

     var controller={};
     controller.register = function(app){
         app.post(BASE_URL+'/user/registration' , (req,resp)=>{
             console.log(req.body);
            userRepo.registerUser(req.body)
            .then((userId)=>{
                  resp.send(userId);
            }).catch(()=>{
                resp.status(500).send("Server Error");
            })
             //resp.send('done');
         })

     }

      
      controller.loginCheck= function(app){

           app.post(BASE_URL+'/user/loginCheck',(req,resp)=>{
               const user = req.body;
               console.log(user)
               userRepo.loginCheck(user.email,user.password)
               .then((user)=>{
                     resp.send(user)
               }).catch((err)=>{
                   resp.status(500).send("server error")

               })
           })
      }

     return controller;
}


module.exports = userController();


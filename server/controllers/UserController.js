/* https://github.com/Surnet/swagger-jsdoc/blob/master/example/v2/routes.js */

  
/**
 * @swagger
 * /api/smartshopper/user/loginCheck:
 *   post:
 *     description: Login to the application
 *     tags:    [Login]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: email to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */




   /**
 * @swagger
 * /api/smartshopper/user/registration:
 *   post:
 *     description: Register as new user to the application
 *     tags:    [Registration]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: firstName
 *         description: firstName of the user
 *         in: formData
 *         required: true
 *         type: string
 *       - name: lastName
 *         description: User lastName
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User password for login
 *         in: formData
 *         required: true
 *         type: string
 *       - name: email
 *         description: email of the user
 *         in: formData
 *         required: true
 *         type: string
 *       - name: registration
 *         description: date of registration
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
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


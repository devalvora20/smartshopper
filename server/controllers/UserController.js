

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


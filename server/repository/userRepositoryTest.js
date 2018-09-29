var repo = require('./UserRepository');
var User = require('../models/User');


var user = new User("kannan","sudhakaran","abc@abc.com","pass@123","10/10/2010")

/*
repo.loginCheck("abc@abc.com","pass@123")
      .then((user)=>console.log(user))
      .catch(err=>console.log(err));
*/

repo.registerUser(user)
  .then((userId)=>{
      
      console.log("user is inserted"+userId)

  })
  .catch(err=>{
      console.log(err);
  })

  console.log("end of test")


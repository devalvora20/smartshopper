
var connection = require('./Conneciton');
const uuidv1 = require('uuid/v1');

var con = connection.getConnection();

function UserRepository() {
    let repo = {};

    
   repo.loginCheck = function(email, password){
     return new Promise((resolve,reject)=>{
       var selectQuery =`select  firstName,lastName,user_id from Users where password= ? and email=? `
       var query = con.query(selectQuery,[password,email],(err,rows)=>{
         console.log(rows)
         if(rows && rows.length>0){
         const user={firstName:rows[0].firstName,
                     lastName:rows[0].lastName,
                     id:rows[0].user_id
             }
          resolve(user); 
        }
          else
          reject("invalid credentials")
       })
     })

   }

  

    repo.registerUser = function(user){
        return new Promise((resolve, reject)=>{
          const userId=uuidv1(); 
          var insertQuery = `insert into Users(user_id,firstName,lastName,
            email,password,registrationDate,role) 
          values (?,?,?,?,?,?,'u')`
            
          var today = new Date(new Date().toUTCString());

          var query = con.query(insertQuery,[userId,user.firstName,user.lastName,
            user.email,user.password,today],
            (err,rows)=>{
            if(err)
            reject(err)
            resolve(userId);

          })
        })

    }


  return repo;
}




module.exports = UserRepository();




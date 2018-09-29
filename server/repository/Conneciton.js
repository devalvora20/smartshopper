var mysql = require('mysql');

var connection = function () {

 console.log('connection instance created');

 var getCon = function () {

            var con= mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'swabhav_db'
            });
            
            return con ;
        };


    return {

        getConnection: getCon

    }

}


module.exports = connection(); 


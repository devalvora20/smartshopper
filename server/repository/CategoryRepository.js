
var connection = require('./Conneciton');
const uuidv1 = require('uuid/v1');

var con = connection.getConnection();

function CategoryRepository() {
    let repo = {};
    repo.getCategories = function(){
        return new Promise((resolve,reject)=>{
            var selectCategory= `select category_id,description,no_of_products
             from category `
            con.query(selectCategory,(err,rows)=>{

                if(err)   reject(err)
                else   resolve(JSON.stringify(rows))
                return;
                 


            })
        })

    }

    repo.getCategoriesByid= function(categoryId){
        return new Promise((resolve,reject)=>{
            var selectCategory= `select category_id,description,no_of_products 
            from category where category_id = ?`;
            con.query(selectCategory,[categoryId],(err,rows)=>{
              //  console.log(rows);
               if(err) throw err;
                resolve(JSON.stringify(rows))

            })

        })

    }

    repo.getProductsByCategoryId = function(category_id){
        return new Promise((resolve,reject)=>{
            var selectProducts = 'select * from products where category_id=?'
            con.query(selectProducts,[category_id],(err,rows)=>{
                if(err) throw err;
                resolve(JSON.stringify(rows))
            })

        })
    }

    repo.getProducts = function(){
        return new Promise((resolve,reject)=>{
          //  var allProdcts= "select * from products"
          var allProdcts=`select product_id,name,image,products.description,price,
          category.description as category_name 
          from products join category
          on products.category_id = category.category_id
          order by category_name`
          
            con.query(allProdcts,(err,rows)=>{
                if(err) throw err;
                resolve(JSON.stringify(rows))
            })

        })
    }

    repo.getProductsById = function(id){
        console.log(id)
        return new Promise((resolve,reject)=>{
            var allProdcts= "select * from products where product_id=?"
            con.query(allProdcts,[id],(err,rows)=>{
                if(err) throw err;
                resolve(JSON.stringify(rows))
            })

        })

    }
    return repo;
}


module.exports = CategoryRepository();
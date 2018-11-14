

var connection = require('./Conneciton');
const uuidv1 = require('uuid/v1');

var con = connection.getConnection();

function OrderRepository() {
    let repo = {};

    repo.placeOrder = function (userId,lineItems,orderCost) {

      //  console.log(lineItems)

        var today = new Date(new Date().toUTCString());
        let orderStatus ='not_placed'
        return new Promise((resolve, reject) => {

            
            con.beginTransaction(function (err) {
                if (err) throw err;
                var insertToOrder = `
            insert into orders(order_id,user_id,no_of_items,
                order_date,order_status,total_cost) 
            values(?,?,?,?,?,?)`
                const orderId = uuidv1();
                con.query(insertToOrder,
                     [orderId, userId, lineItems.length, today,orderStatus,orderCost], function (err, rows) {
                    if (err) {
                        con.rollback(() => { throw err });
                    }


                    var inserToLineItems = `insert into lineitems(lineItem_id,
                    product_id,order_id,quantity,itemCost)
                values(?,?,?,?,?)`
                    console.log(lineItems)
                    for (var i = 0; i < lineItems.length; i++) {
                        var itemId = uuidv1();
                        var itemQty = lineItems[i].quantity;
                         var itemCost = lineItems[i].itemCost;

                        var productId = lineItems[i].product_id;
                        con.query(inserToLineItems, [itemId, productId, 
                            orderId, itemQty,itemCost], function (err, rows) {
                            if (err) {
                                con.rollback(() => { throw err });

                            }
                            con.commit((err) => {
                                if (err) {
                                    con.rollback();
                                    throw err;
                                }

                                resolve(orderId)
                            });

                        })
                    }

                })



            });


        })

    }

    repo.getOrders = function(userid){
        return new Promise((resolve,reject)=>{
            var selectQuery = `
            select order_id,user_id,no_of_items,order_date,order_status,total_cost
 from orders where user_id= ?`

           con.query(selectQuery,[userid],(err,rows)=>{
                if(err){
                    reject(err);
                }
               else
               resolve(JSON.stringify(rows))

           })



        })

    }

    repo.addToCart = function (quantity, product, userId) {
        return new Promise((resolve, reject) => {

            var insertQuery = `
            insert into cart(cart_id,name,price,qty,totalPrice,product_id,user_id,
               date_created,order_placed)  
       values(?,?,?,?,?,?,?,?,?);`

            var cart_id = uuidv1();
            var name = product.name;
            var price = product.price;
            var totalPrice = quantity * price;
            var today = new Date(new Date().toUTCString());
            con.query(insertQuery, [cart_id, name, price, quantity, totalPrice,
                 product.id, userId,today,'N'], (err,rows) => {
                     if(err){
                         throw err;
                     }

                     resolve(cart_id)
            })


        })


    }

    return repo;

}



module.exports = OrderRepository();








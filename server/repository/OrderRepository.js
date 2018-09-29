

var connection = require('./Conneciton');
const uuidv1 = require('uuid/v1');

var con = connection.getConnection();

function OrderRepository() {
    let repo = {};

    repo.placeOrder = function (userId, date, lineItems) {

        console.log(lineItems)

        return new Promise((resolve, reject) => {

            con.beginTransaction(function (err) {
                if (err) throw err;
                var insertToOrder = `
            insert into orders(order_id,user_id,no_of_items,order_date) 
            values(?,?,?,?)`
                const orderId = uuidv1();
                con.query(insertToOrder, [orderId, userId, lineItems.length, date], function (err, rows) {
                    if (err) {
                        con.rollback(() => { throw err });
                    }


                    var inserToLineItems = `insert into lineitems(lineItem_id,
                    product_id,order_id,quantity)
                values(?,?,?,?)`
                    console.log(lineItems)
                    for (var i = 0; i < lineItems.length; i++) {
                        var itemId = uuidv1();
                        var itemQty = lineItems[i].quantity;

                        var productId = lineItems[i].productId;
                        con.query(inserToLineItems, [itemId, productId, orderId, itemQty], function (err, rows) {
                            if (err) {
                                con.rollback(() => { throw err });

                            }
                            con.commit((err) => {
                                if (err) {
                                    con.rollback();
                                    throw err;
                                }

                                resolve('Order Placed')
                            });

                        })
                    }

                })



            });


        })

    }


    repo.addToCart = function (quantity, product, userId, date) {
        return new Promise((resolve, reject) => {

            var insertQuery = `
insert into cart(cart_id,name,price,qty,totalPrice,product_id,user_id) 
values(?,?,?,?,?,?,?);`

            var cart_id = uuidv1();
            var name = product.name;
            var price = product.price;
            var totalPrice = quantity * price;

            con.query(insertQuery, [cart_id, name, price, quantity, totalPrice,
                 product.id, userId], (err,rows) => {
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








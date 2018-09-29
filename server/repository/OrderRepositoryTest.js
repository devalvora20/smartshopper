
var repo = require('./OrderRepository');



var lineItems=[{
    quantity:5,
    productId:'260f598d-beec-11e8-89a7-f04da24a75d1'

},{
    quantity:5,
    productId:'260f598d-beec-11e8-89a7-f04da24a75d1'

}];

var userId=`2efdecf0-bddf-11e8-bd08-0daff47a7110`
/*
repo.placeOrder(userId,'11/11/2011',lineItems)
    .then(r=>console.log(r));*/

   
    var product = {
        id:`25f740bd-beec-11e8-89a7-f04da24a75d1`,
        name:`samsung`,
        price:40000
    }

    repo.addToCart(3,product,userId,'12/12/2012')
        .then(c=>console.log(c));
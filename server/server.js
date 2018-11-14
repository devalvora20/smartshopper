const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const expressJwt = require('express-jwt'); //auth
const jwt = require('jsonwebtoken'); //auth

var port = process.env.PORT || 9000
const jwtSecret = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');

const app = express();
//swagger starts
var swaggerJSDoc = require('swagger-jsdoc');
var swaggerDefinition = {
  info: {
    title: 'SmartShopper API documentation',
    version: '1.0.0',
    description: '<h2>CopyRight &copy; SwabhavTechlabs<h2>',
  },
  host: `localhost:${port}`,
  basePath: '/',
};

var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./controllers/*.js'],
};
var swaggerSpec = swaggerJSDoc(options);
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
//swagger ends

app.use(express.static('client'))

app.use(cors(), bodyParser.json(), expressJwt({
  secret: jwtSecret,
  credentialsRequired: false
}));


const userController = require('./controllers/UserController')
userController.register(app);
userController.loginCheck(app);

const productController = require('./controllers/ProductsController')
productController.getProducts(app);
productController.getProductsByid(app);
productController.getCategory(app);
productController.getCategoryById(app);

const cartController = require('./controllers/CartController')
cartController.addToCart(app);

const orderController = require('./controllers/OrderController')
orderController.placeOrder(app);
orderController.getOrdersForUser(app);

//const test = require('./controllers/TestController');
//test.setup(app);

app.post('/login', (req, res) => {
  const {email, password} = req.body;

  const db ={};
  db.uers=[];

  const user = db.users.list().find((user) =>  user.email === email);
  if (!(user && user.password === password)) {
    res.sendStatus(401);
    return;
  }
  const token = jwt.sign({sub: user.id}, jwtSecret);
  res.send({token});
});

app.listen(port, () => console.info(`Server started on port ${port}`));
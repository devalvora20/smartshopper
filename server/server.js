const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const expressJwt = require('express-jwt'); //auth
const jwt = require('jsonwebtoken'); //auth

var port = process.env.PORT || 9000
const jwtSecret = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');

const app = express();


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
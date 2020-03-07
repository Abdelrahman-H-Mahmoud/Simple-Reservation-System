const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()

const user_ms = 'http://user-ms:3001';
const room_ms = 'http://room-ms:3002';

const userServiceProxy = httpProxy(user_ms);
const roomServiceProxy = httpProxy(room_ms);
// Authentication
app.use((req, res, next) => {
  // TODO: my authentication logic
  console.log("Gateway Middleware");
  req.headers.authorization = "SUPERSECRETKEYBLABLABLA";
  next()
})

// Proxy requests
app.all(/^\/api\/users/, (req, res, next) => {
  console.log('User Request', user_ms);
  userServiceProxy(req, res, next);
});

app.all(/^\/api\/rooms/, (req, res, next) => {
  console.log('Room Request');
  roomServiceProxy(req, res, next);
});

app.listen(3000, () => {
  console.log("API Gateway Started")
})
const express = require('express')
const httpProxy = require('express-http-proxy')
const services = require('./services');
const app = express()

// Authentication
app.use((req, res, next) => {
  // TODO: my authentication logic
  console.log("Gateway Middleware");
  req.headers.authorization = "SUPERSECRETKEYBLABLABLA";
  next()
})


//create proxy request for each MicroService.
//TODO Get these services from DB & create register service endpoint & health-check endpoint.
services.forEach(service=>{
  const serviceProxy=httpProxy(service.service_domain);
  app.all(service.service_endpoint, (req, res, next) => {
    console.log(service.service_name);
    serviceProxy(req, res, next);
  });
});

const port=process.env.PORT || 3000;
app.listen(port , () => {
  console.log("API Gateway Started")
})
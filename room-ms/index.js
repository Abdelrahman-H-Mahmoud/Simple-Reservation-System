const express = require('express')
const { PORT, API_SECRET } = require('./config');
const Bootstrap = require('./src/bootstrapper');

const app = express();

app.use((req, res, next) => {
  if (req.headers.authorization === API_SECRET)
    return next();
  return res.status(403).json({ message: "You are not authorizde to view this resource" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
Bootstrap(app);

app.listen(PORT, () => {
  //TODO: Register me in the API Gateway
  console.log("Reservation MS Started");
})
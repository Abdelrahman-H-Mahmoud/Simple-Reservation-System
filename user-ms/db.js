const mongoose = require('mongoose');
const { DB_URL } = require('./config');
const seeder = require('./seeder');

console.log(DB_URL);
const connect = () => {
    mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log("DB Connected");
        seeder.loadData();
    }).catch(err => {
        console.log(err);
        console.log("Error Happend while Connecting to DB")
    });
}


module.exports = {
    connect
}



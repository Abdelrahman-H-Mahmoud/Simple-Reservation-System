const data = require('./data');
const UserModel = require('../src/models/user.model');

const loadData = () => {
    UserModel.collection.drop().then(() => {
        UserModel.insertMany(data).then((users) => {
            console.log("DONE");
        }).catch(err => {
            console.log(err);
        });
    }).catch(err => {
        UserModel.insertMany(data).then((users) => {
            console.log("DONE");
        }).catch(err => {
            console.log(err);
        });
        //console.log(err);
    });
}

module.exports = { loadData };

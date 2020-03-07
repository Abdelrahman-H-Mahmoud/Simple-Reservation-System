const data = require('./data');
const RoomModel = require('../src/models/room.model');

const loadData = () => {
    RoomModel.collection.drop().then(() => {
        UserModel.insertMany(data).then((rooms) => {
            console.log("DONE");
        }).catch(err => {
            console.log(err);
        });
    }).catch(err => {
        RoomModel.insertMany(data).then((rooms) => {
            console.log("DONE");
        }).catch(err => {
            console.log(err);
        });
        //console.log(err);
    });
}

module.exports = { loadData };

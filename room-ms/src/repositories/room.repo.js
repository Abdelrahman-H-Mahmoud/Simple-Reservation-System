const roomModel = require('../models/room.model');

class RoomRepository {
    constructor() { }

    find(query = {}) {
        return roomModel.find(query);
    }

    findOne(query = {}) {
        return roomModel.findOne(query);
    }

    updateOne(query = {}, data) {
        data.updated_at = new Date(Date.now());
        return roomModel.updateOne(query, { "$set": data });
    }
}

module.exports = RoomRepository;
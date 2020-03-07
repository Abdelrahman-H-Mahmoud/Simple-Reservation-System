const userModel = require('../models/user.model');

class UserRepository {
    constructor() { }

    find(query = {}) {
        return userModel.find(query);
    }

    findOne(query = {}) {
        return userModel.findOne(query);
    }

    updateOne(query = {}, data) {
        return userModel.updateOne(query, { "$set": data });
    }
}

module.exports = UserRepository;
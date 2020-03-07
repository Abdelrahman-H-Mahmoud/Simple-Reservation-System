const UserRepository = require('../repositories/user.repo');

const userRepo = new UserRepository();

class UserService {
    constructor() { }

    findAllUsers(query = {}) {
        return userRepo.find();
    }
    
    findUserById(id) {
        return userRepo.findOne({ _id: id });
    }

    subctractBonusFromUser(user_id, points) {
        return userRepo.findOne({ _id: user_id })
            .then(user => {
                if (user.bonus >= points) {
                    const currentBonus = user.bonus - points;
                    return userRepo.updateOne({ _id: user }, { bonus: currentBonus });
                }
                throw new UserServiceError("NotEnoughBonus");
            });
    }
}

class UserServiceError extends Error {
    constructor(msg) {
        super(msg);
        this.name = "UserServiceError";
    }
}

module.exports = {UserService,UserServiceError};
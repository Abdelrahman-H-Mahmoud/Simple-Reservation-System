const RoomRepository = require('../repositories/room.repo');

const roomRepo = new RoomRepository();

class RoomService {
    constructor() { }

    getAllRooms() {
        return roomRepo.find({});
    }

    getAvailableRooms() {
        return roomRepo.find({ available_amount: { "$gt": 0 } });
    }

    getRoomById(room_id) {
        return roomRepo.findOne({ _id: room_id });
    }

    updateRoomAvailableAmount(room_id, newAmount) {
        return roomRepo.updateOne({ _id: room_id }, { available_amount: newAmount });
    }

}

class RoomServiceError extends Error {
    constructor(msg) {
        super(msg);
        this.name = "RoomServiceError";
    }
}

module.exports = RoomService;
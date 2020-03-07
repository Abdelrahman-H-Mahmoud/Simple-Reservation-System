const ReservationRepository = require('../repositories/reservation.repo');
const RoomService = require("./room.service");
const axios = require("axios");
const producer=require('./producer');
const reservationRepo = new ReservationRepository();
const roomService = new RoomService();

class ReservationService {
    constructor(apiGateway) {
        this.apiGateway = apiGateway;
        this.userEndpoint = `/api/users/subtractBonus`;
    }
    async reserveRoom(user_id, room_id) {
        try {
            let room = await roomService.getRoomById(room_id);
            if (room.available_amount > 0) {
                let reservation = {
                    user_id,
                    room_id
                }
                let body = { user_id: user_id, points: room.required_points }
                let res = await axios.post(`${this.apiGateway}${this.userEndpoint}`, body);
                await roomService.updateRoomAvailableAmount(room_id, --room.available_amount);
                reservation.room_status = res.status ? "RESERVED" : "PENDING_APPROVAL";

                let createdReservation = await reservationRepo.insertOne(reservation);
                
                //TODO Send Email
                //producer.sendToQueue(`room ${room.name} with Id ${room.id} status changed to: ${createdReservation.room_status}`);
                
                return createdReservation;
            }
        }
        catch (err) {
            console.log(err);
            throw new ReservationServiceError(err.message);
        }
    }
}

class ReservationServiceError extends Error {
    constructor(msg) {
        super(msg);
        this.name = "ReservationServiceError";
    }
}

module.exports = ReservationService;
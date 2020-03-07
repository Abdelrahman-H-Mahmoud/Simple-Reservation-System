const reservationModel = require('../models/reservation.model');

class ReservationRepository {
    constructor() { }

    insertOne(reservation){
        let doc=new reservationModel(reservation);
        return doc.save();
    }
    find(query = {}) {
        return reservationModel.find(query);
    }
    findOne(query = {}) {
        return reservationModel.findOne(query);
    }
    updateOne(query = {}, data) {
        data.updated_at = new Date(Date.now());
        return reservationModel.updateOne(query, { "$set": data });
    }
}

module.exports = ReservationRepository;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReservationModel = new Schema({
    user_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
    room_id: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: "Rooms" },
    room_status: { type: String, enum: ["RESERVED", "PENDING_APPROVAL"], required: true },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Reservations", ReservationModel, "Reservations");
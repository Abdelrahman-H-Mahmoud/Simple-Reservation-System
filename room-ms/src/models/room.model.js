const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RoomModel = new Schema({
    name: { type: String, required: true },
    available_amount: { type: Number, default: 1 },
    required_points: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }
});


module.exports = mongoose.model("Rooms", RoomModel, "Rooms");
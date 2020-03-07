const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserModel = new Schema({
    name: { type: String, required: true },
    role: { type: String, required: true, enum: ["USER", "ADMIN"] },
    bonus: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Users", UserModel,"Users");
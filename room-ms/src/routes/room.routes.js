const router = require('express').Router();
const { ReservationService, RoomService } = require("../services");
const { reserveSchema } = require('./schemas');
const { validateBody } = require('./middlewares');
const { GATEWAY } = require('../../config');

const reservationService = new ReservationService(GATEWAY);
const roomService = new RoomService(GATEWAY);



router.get("/", async (req, res) => {
    const rooms = await roomService.getAllRooms();
    res.json({ data: rooms });
});

router.post("/reserve", validateBody(reserveSchema), async (req, res) => {
    const { user_id, room_id } = req.body;
    try {
        let reservation = await reservationService.reserveRoom(user_id, room_id);
        return res.json({ message: "OK", status: reservation.room_status });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
const router = require('express').Router();
const {UserService} = require("../services/user.service");
const { substractSchema } = require('./schemas');
const { validateBody } = require('./middlewares');
const userService = new UserService();

router.get("/", async (req, res) => {
    try {
        let users = await userService.findAllUsers();
        return res.json({ data: users });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }

});

router.get("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let user = await userService.findUserById(id);
        return res.json({ data: user });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post("/subtractBonus", validateBody(substractSchema), async (req, res) => {
    const { user_id, points } = req.body;
    try {
        let updated = await userService.subctractBonusFromUser(user_id, points);
        console.log(updated);
        return res.json({ message: "OK", status: 1 });
    }
    catch (err) {
        console.log(err);
        if (err.message === "NotEnoughBonus") {
            return res.json({ message: "Not Enough Bonus", status: 0 });
        }
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
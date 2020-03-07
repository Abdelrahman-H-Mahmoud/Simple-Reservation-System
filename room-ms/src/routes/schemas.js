const Joi = require('@hapi/joi');

const reserveSchema = Joi.object({
    user_id: Joi.string()
        .alphanum()
        .length(24)
        .required(),
    room_id: Joi.string()
        .alphanum()
        .length(24)
        .required(),
});

module.exports = {
    reserveSchema
}
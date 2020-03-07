const Joi = require('@hapi/joi');

const substractSchema = Joi.object({
    user_id: Joi.string()
        .alphanum()
        .length(24)
        .required(),
    points:
        Joi.number()
         .required()
});

module.exports = {
    substractSchema
}
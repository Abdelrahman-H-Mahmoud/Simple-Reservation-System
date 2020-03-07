module.exports = (schema) => {
    return (req, res, next) => {
        let body = req.body;
        let result = schema.validate(body);
        if (result.error) {
            return res.status(400).json({ message: result.error });
        }
        next();
    }
}
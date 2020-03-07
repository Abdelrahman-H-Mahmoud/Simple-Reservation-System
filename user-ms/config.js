module.exports = {
    PORT: process.env.PORT || 3001,
    DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/users_db',
    API_SECRET:process.env.API_SECRET || "SUPERSECRETKEYBLABLABLA"
};
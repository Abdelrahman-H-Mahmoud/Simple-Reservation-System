module.exports = {
    PORT: process.env.PORT || 3002,
    DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/reservation_db',
    API_SECRET:process.env.API_SECRET || "SUPERSECRETKEYBLABLABLA",
    GATEWAY:process.env.GATEWAY || "http://api_gateway:3000",
    producer:{
        queue: 'reservationStatus',
        connection: { protocol: 'amqp', hostname: 'rabbitmq', port: 5672, username: 'user', password: 'password' }
      }
};
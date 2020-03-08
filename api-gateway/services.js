const services = [
    {
        service_name: "User Microservice",
        service_domain: "http://user-ms:3001",
        service_endpoint:/^\/api\/users/
    },
    {
        service_name: "Room Microservice",
        service_domain: "http://room-ms:3002",
        service_endpoint:/^\/api\/rooms/
    }
];

module.exports = services;
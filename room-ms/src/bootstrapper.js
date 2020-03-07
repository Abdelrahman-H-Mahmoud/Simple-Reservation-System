const { roomRoutes } = require('./routes');
const db = require('../db');

const Bootstrap=(app)=>{
    db.connect();
    // Authentication
    app.use('/api/rooms', roomRoutes);
}

module.exports=Bootstrap;
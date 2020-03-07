const { userRoutes } = require('./routes');
const db = require('../db');

const Bootstrap=(app)=>{
    db.connect();
    // Authentication
    app.use('/api/users', userRoutes);
}

module.exports=Bootstrap;
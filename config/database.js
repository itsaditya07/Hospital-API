const mongoose = require('mongoose');

mongoose.connect(process.env.mongodb_atlas_url);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to DataBase'));

db.once('open',()=>{
    console.log('succesfully connecting with mongo db');
});

module.exports = db;
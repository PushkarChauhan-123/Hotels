const mongoose = require('mongoose');

// Define the mongo url
const mongoUrl = 'mongodb://0.0.0.0/hotel';

// Set up a connection to the mongo database

mongoose.connect(mongoUrl ,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('Connected to the database');
})

db.on('error', (error)=>{
    console.log('An error occured while connecting to the database');
})

db.on('disconnected', ()=>{ 
    console.log('Disconnected from the database');
})

module.exports = db;

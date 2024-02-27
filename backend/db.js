const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const path = process.env.MONGOURL;

mongoose.set('strictQuery', true);
// mongoose.connect(path, {useUnifiedTopology:true, useNewUrlParser:true})
mongoose.connect(path, {useNewUrlParser:true})

let db = mongoose.connection

db.once('connected', ()=>{
    console.log('MongoDB connected successfully');
})

db.on('error', ()=>{
    console.log('MongoDB connection failed');
})

module.exports = mongoose
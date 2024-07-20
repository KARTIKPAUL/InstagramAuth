const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
    try {
       const conn = await mongoose.connect(process.env.MONGO_URI);
       console.log(`MongoDb Connection Sucessfully !! DB Host:${conn.connection.host}`); 
    } catch (error) {
        console.log(`Database Connection Failed`)
    }
}

module.exports = connectDB;
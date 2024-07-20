//Import Essential Things
const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/dbConfig.js');
const authRouter = require('./Routes/authRouter.js');


//Initialize App
const app = express();

//Database Connection
connectDB();



//Middleware
app.use(express.json());
app.use(cors());

//Trial
app.use('/',authRouter)


app.get('/',(req,res) => {
    res.send('Hello')
})

module.exports = app;
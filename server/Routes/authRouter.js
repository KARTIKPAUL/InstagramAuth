const express = require('express');
const authRouter = express.Router();
const {signup , login} = require('../Controllers/authUser.js')


authRouter.post('/signup',signup);
authRouter.post('/login',login);

module.exports = authRouter;
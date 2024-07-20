const express = require('express');
const emailValidator = require('email-validator');
const User = require('../Models/userModel.js')
const bcrypt = require('bcrypt')

//SignUp

const signup = async(req,res) => {
    const{name,email,password} = req.body;

    //Validation
    if(!name || !email || !password){
        return res.status(400).json({
            success: false,
            message: 'Every Fieled is required'
        })
    }

    const validEmail = emailValidator.validate(email);
    if(!validEmail){
        return res.status(400).json({
            success: false,
            message: 'Email is Not Valid'
        })
    }

    try {
        const userInfo = User(req.body);
        const result = await userInfo.save();
        return res.status(200).json({
            success: true,
            data: `Account Create Successfully ${result}`
        })
    } catch (error) {
        if(error.code === 11000){
            return res.status(400).json({
                success: false,
                message: 'Account Already Regsitered'
            })
        }
        return res.status(400).json({
            success: false,
            message: `Error ! When Creation Account ${error}`
        })
    }
}


//LogIn

const login = async(req,res) => {
    const{email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            success: false,
            message: 'Every Fieled is required'
        })
    }
    const validEmail = emailValidator.validate(email);
    if(!validEmail){
        return res.status(400).json({
            success: false,
            message: 'Email is Not Valid'
        })
    }

    try {
        const user = await User.findOne({email}).select('+password');
        if(!user || !(await bcrypt.compare(password , user.password))){
            return res.status(400).json({
                success: false,
                message: 'Invalid Crediantials',
            }) 
        }
        res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            data: 'User Not Registered'
        }) 
    }

}

module.exports = { 
    signup,
    login
}
const express = require('express')
const router = express.Router();
const User = require('../models/userModel')

router.post('/createuser', async(req,res)=>{
    const {name, email, password, address} = req.body
    const newUser = new User({name,email,password,address})
    try {
        await newUser.save()
        res.send('User Registered Successfully')
    } catch (error) {
        return res.status(400).json({message: error})
    }
})

router.post('/loginuser', async(req,res)=>{
    const {email, password} = req.body
    try {
        const loginuser = await User.find({email, password})
        
        if(loginuser.length > 0){
            
            const currentUser={
                name: loginuser[0].name,
                email: loginuser[0].email,
                address: loginuser[0].address,
                _id: loginuser[0]._id
            }

            res.send(currentUser)

        }
        else{
            return res.status(400).json({message: 'Please enter the correct email and password'})
        }
        
    } catch (error) {
        return res.status(400).json({message: 'Something went wrong'})
    }
})

module.exports = router;
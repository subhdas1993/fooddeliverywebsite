const express = require('express')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Order = require('../models/orderModel')

router.post('/placeorder', async(req, res) => {
    const { alltotal, name, email, cartitems, address } = req.body
    const transactionid = uuidv4()

    try {
        const newOrder = await new Order({
            name: name,
            email: email,
            address: address,
            orderItems: cartitems,
            orderAmount: alltotal,
            transactionid: transactionid
        })
        newOrder.save()
        res.send('Order placed Successfully')
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong', error })
    }
})

router.post('/getuserorders', async(req,res)=>{
    const {email} = req.body
    try {
        const orders = await Order.find({email:email}).sort({_id: -1})
        res.send(orders)
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong', error })
    }

})
module.exports = router
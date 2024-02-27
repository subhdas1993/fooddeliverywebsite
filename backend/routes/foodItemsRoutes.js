const express = require('express')
const router = express.Router();
const FoodItems = require('../models/foodItemsModels')

router.get('/getfooditems', async(req,res)=>{
    try {
        const output = await FoodItems.find();
        res.send(output)
    } catch (error) {
        return res.status(400).json({message: error})
    }
})

module.exports = router;
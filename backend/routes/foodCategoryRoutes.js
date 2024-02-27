const express = require('express')
const router = express.Router();
const FoodCategories = require('../models/foodCategoryModels')

router.get('/getfoodcategory', async(req,res)=>{
    try {
        const output = await FoodCategories.find();
        res.send(output)
    } catch (error) {
        return res.status(400).json({message: error})
    }
})

module.exports = router;
const express = require('express');
const app = express();
const bodyParser  = require('body-parser')
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const FoodItemsRoute = require('./routes/foodItemsRoutes')
const FoodCategoriesRoute = require('./routes/foodCategoryRoutes')
const UserRoute = require('./routes/userRoute')
const OrdersRoute = require('./routes/ordersRoute')

app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Server Working");
})

app.use('/api', FoodItemsRoute);
app.use('/api', FoodCategoriesRoute);
app.use('/api', UserRoute);
app.use('/api', OrdersRoute);

mongoose.set('strictQuery', true);
const connectiondone = async() => {
  try {
    const dbconnect = await mongoose.connect(process.env.MONGOURL,{useNewUrlParser: true})
    console.log(`Connection Establish ${dbconnect.connection.host}`)
  } catch (error) {
    console.log(error)
  }
}

connectiondone().then(()=>{
    app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
  })
})
const express = require('express');
const mongoose=require('mongoose');
const Market=require('./models/market');
const marketRoutes=require('./routes/market-routes');

const PORT = 3000;
const URL = 'mongodb://localhost:27017/FinalBackEnd';

const app = express();
app.use(express. json());
app.use(marketRoutes);

mongoose
    .connect(URL)
    .then(()=>console.log('Connected to MongoDB') )
    .catch((err)=> console.log(`DB connection error: ${err}`));


app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});


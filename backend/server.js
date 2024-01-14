const express = require('express');
const mongoose=require('mongoose');
const marketRoutes=require('./routes/market-routes');

const PORT = 3000;
const URL = 'mongodb+srv://mystery_dev:backend123@cluster0.liwzter.mongodb.net/FinalBackEnd?retryWrites=true&w=majority';

const app = express();
app.use(express. json());


mongoose
    .connect(URL)
    .then(()=>console.log('Connected to MongoDB') )
    .catch((err)=> console.log(`DB connection error: ${err}`));



app.listen(PORT, '0.0.0.0', (err) => {
    err ? console.log(err) : console.log(`Listening on port ${PORT}`);
});
app.use(marketRoutes);

const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const marketSchema= new Schema({
    title:{
        type:String,
        require: true,
    },
    director:{
        type:String,
        require: true,
    },
    year:{
        type:Number,
        require: true,
    },
    genres:[String],
    rating:Number,
    duration:{
        hours:Number,
        minutes:Number,
    },
    reviews:[{
        name:String,
        text:String,
    }],
});

const Market= mongoose.model('Market',marketSchema);
module.exports = Market;
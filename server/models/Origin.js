const { Schema, model }= require('mongoose');

const originSc= new Schema({
    name:{
        type: String,
    },
    description:{
        type: String
    },
    tiers:[{
        type: Number
    }],
    pngUrl:{
        type: String
    }
});

module.exports= model("Origin", originSc);
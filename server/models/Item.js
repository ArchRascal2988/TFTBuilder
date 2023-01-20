const { Schema, model }= require('mongoose');

const baseItemSc= new Schema({
    name:{
        type: String
    },
    effects:{
        type: String
    },
    pngUrl:{
        type: String
    }
});

const itemSc= new Schema({
    name:{
        type: String
    },
    effect:{
        type: String
    },
    recipie:[baseItemSc],
    special:{
        type: String,
        default: null
    },
    pngUrl:{
        type: String
    }
});

module.exports= model("Item", itemSc);
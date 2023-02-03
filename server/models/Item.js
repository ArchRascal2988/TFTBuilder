const { Schema, model }= require('mongoose');

const itemSc= new Schema({
    name:{
        type: String
    },
    effects: Map,
    from:[Number],
    type:{
        type: String
    },
    pngUrl:{
        type: String
    }
});

module.exports= model("Item", itemSc);
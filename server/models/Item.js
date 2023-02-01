const { Schema, model }= require('mongoose');

const itemSc= new Schema({
    name:{
        type: String
    },
    effects: Map,
    from:[{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }],
    type:{
        type: String
    },
    pngUrl:{
        type: String
    }
});

module.exports= model("Item", itemSc);
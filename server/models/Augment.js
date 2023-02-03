const { Schema, model }= require('mongoose');

const augSc= new Schema(
    {
        name:{
            type: String
        },
        desc:{
            type: String
        },
        effects: Map,
        type:{
            type: String
        },
        pngUrl:{
            type: String
        }
    }
);

module.exports= model("Augment", augSc);
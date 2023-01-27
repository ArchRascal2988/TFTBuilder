const { Schema, model }= require('mongoose');

const augSc= new Schema(
    {
        name:{
            type: String
        },
        desc:{
            type: String
        },
        type:{
            type: String
        },
        pngUrl:{
            type: String
        }
    }
);

module.exports= model("Augment", augSc);
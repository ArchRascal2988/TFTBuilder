const { Schema, model }= require('mongoose');

const effectSc= new Schema({
    minUnits:{
        type: Number
    },
    variables: Map
});

const traitSc= new Schema(
{
    name:{
        type: String,
    },
    desc:{
        type: String
    },
    type:{
        type: String
    },
    effects:[effectSc],
    pngUrl:{
        type: String,
        required: false
    }
}
);

module.exports= model("Trait", traitSc);
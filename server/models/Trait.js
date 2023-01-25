const { Schema, model }= require('mongoose');

const effectSc= new Schema({
    minUnits:{
        type: Number
    },
    style:{
        type: Number
    },
    variables: Map
})

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
        type: String
    }
}
);

module.exports= model("Trait", traitSc);
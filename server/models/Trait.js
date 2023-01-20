const { Schema, model }= require('mongoose');

const tierSc= new Schema({
    threshold:{
        type: Number
    },
    tier:{
        type: Number
    },
    scaling:{
        type: Number
    }
})

const traitSc= new Schema(
{
    name:{
        type: String,
    },
    description:{
        type: String
    },
    type:{
        type: String
    },
    tiers:[tierSc],
    pngUrl:{
        type: String
    }
}
);

module.exports= model("Trait", traitSc);
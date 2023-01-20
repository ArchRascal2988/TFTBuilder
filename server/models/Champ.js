const { Schema, model }= require('mongoose');

const abilitySc= new Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    cost:[{
        type: Number,
        required: false
    }],
    pngUrl:{
        type: String
    }
});

const champSc= new Schema(
    {
        name:{
            type: String,
            required: true,
            unique: true
        },
        rarity:{
            type: Number,
            min: 1,
            min: 5
        },
        traits: [{
            type: Schema.Types.ObjectId,
            ref: 'Trait'
        }], 
        ability: abilitySc,
        currItems:[{
            type: Schema.Types.ObjectId,
            ref: 'Item'
        }],
        pngUrl:{
            type: String
        }
    }
);

module.exports= model("Champ", champSc);
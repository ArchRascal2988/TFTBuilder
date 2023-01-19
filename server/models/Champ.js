const { Schema, model }= require('mongoose');

const abilitySc= new Schema({
    description:{
        type: String
    },
    cost:[{
        type: Number
    }],
    pngUrl:{
        type: String
    }
});

const classSc= newSchema({
    name:{
        type: String
    },
    pngUrl:{
        type: String
    }
})

const champSc= new Schema(
    {
        name:{
            type: String,
            required: true,
            unique: true
        },
        rarity:{
            type: Number,
            min: 0,
            min: 5
        },
        class: classSc,
        origins: [{
            type: Schema.Types.ObjectId,
            ref: 'Origin'
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
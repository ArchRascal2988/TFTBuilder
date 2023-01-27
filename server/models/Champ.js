const { Schema, model }= require('mongoose');

const varSc= new Schema({
    name:{
        type: String
    },
    value:[Number]
});

const abilitySc= new Schema({
    name:{
        type: String
    },
    desc:{
        type: String
    },
    cost:[Number],
    variables:[varSc],
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
        cost:{
            type: Number,
            min: 1,
            mix: 5
        },
        traits: [{
            type: Schema.Types.ObjectId,
            ref: 'Trait'
        }], 
        ability: abilitySc,
        currItems:[{
            type: Schema.Types.ObjectId,
            ref: 'Item',
            default: null
        }],
        pngUrl:{
            type: String
        }
    }
);

module.exports= model("Champ", champSc);
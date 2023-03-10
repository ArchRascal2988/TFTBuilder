const { Schema, model }= require('mongoose');

const abilitySc= new Schema({
    name:{
        type: String
    },
    desc:{
        type: String
    },
    cost:[Number],
    variables: Map,
    pngUrl: {
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
        starLvl:{
            type: String,
            default: "1 Star",
            enum: ["1 Star", "2 Star", "3 Star"]
        }, 
        isPrime:{
            type: Boolean,
            default: false
        },
        pngUrl:{
            type: String
        }
    }
);

module.exports= model("Champ", champSc);
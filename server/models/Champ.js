const { Schema, model }= require('mongoose');

const statSc= new Schema({
    idk:{
        type: String
    }
});

const abilitySc= new Schema({
    desc:{
        type: String
    },
    cost:{
        type: String
    }
})

const ChampSc= new Schema(
    {
        name:{
            type: String,
            required: true,
            unique: true
        },
        tags:{
            type: Array
        },
        stats: statSc,
        ability: abilitySc
    }
)

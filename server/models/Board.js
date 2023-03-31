const { Schema, model }= require('mongoose');

const cellSc= new Schema({
    row:{
        type: Number
    },
    column:{
        type: Number
    },
    currentChamp:{
        type: Schema.Types.ObjectId,
        ref: 'Champ',
        required: false,
        default: null
    },
    heldI:{
        type: Schema.Types.ObjectId,
        required: false,
        default: null
    }
})

const boardSc= new Schema(
    {
        matrix:{
            type: [[cellSc]],
            default: new Array(new Array(7), new Array(7), new Array(7), new Array(7))
        },
        augments:[{
            type: Schema.Types.ObjectId,
            ref: 'Augment'
        }],
        traits: Map,
        notes:{
            type: String
        },
        title:{
            type: String
        }
    }
);

module.exports= model("Board", boardSc);
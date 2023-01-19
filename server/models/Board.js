const { Schema, model }= require('mongoose');

const cellSc= new Schema({
    currentChamp:{
        type: Schema.Types.ObjectId,
        ref: 'Champ',
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
        }]
    }
);

module.exports= model("Board", boardSc);
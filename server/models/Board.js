const { Schema, model }= require('mongoose');

const cellSc= new Schema({
    isOccupied:{
        type: Boolean,
        default: false
    },
    currentChamp:{
        type: Schema.Types.ObjectId,
        ref: 'Champ',
        required: false
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

cellSc.post('save', function(next){
    if(this.currentChamp){
        this.isOccupied= true;
    }

    next();
});

module.exports= model("Board", boardSc);
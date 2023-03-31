import { Reducer, useRef } from 'react';

import { Cell, Champ, Item, Trait, Augment } from '../stateclasses';
import { GameBoard } from '../stateclasses';

interface buffer {
    champ: Champ | null;
    item: Item | null;
    trait: Trait | null;
    augment: Augment | null;
}

const buff:buffer={
    champ: null,
    item: null,
    trait: null,
    augment: null
}


export const boardReducer: Reducer<GameBoard, any>= (state:GameBoard, action:any)=>{
    switch(action.type){
        case 'occ':
        //updates values correctly but since the gameBoards mem address stays the same it cannot rerender icri
            if(buff.champ){
                state.matrix= state.matrix.map((el, i1)=> el.map((el, i2)=>{
                    if(i1==action.r && i2==action.c){
                       el.occupy(<Champ>buff.champ, true);
                       return el;
                    } else return <Cell>el;
                }))
            } else{
                console.log("Trying to occupy with no payload.");
            }
            break;
        case 'eq':
            break;
        case 'aug':
            break;
        case 'tr':
            break;
        case 'buff':
            switch(action.bt){
                case 'champ': buff.champ= action.payload;
                    break;
            }
            break;    
    }

    return state;
};
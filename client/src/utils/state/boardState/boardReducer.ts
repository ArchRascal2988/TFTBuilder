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
        //updates values correctly but since the gameBoards value (observed by reacts algo) stays the same it cannot rerender icri
            if(buff.champ){
                state.matrix[action.r][action.c].occupy(buff.champ);
            } else{
                state.matrix[action.r][action.c].occupy();
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
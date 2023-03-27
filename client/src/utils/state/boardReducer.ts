import { Reducer, useRef } from 'react';

import { GameBoard } from './stateclasses';

let queued= useRef(null);

export const boardReducer: Reducer<GameBoard, any>= (state:GameBoard, action:any)=>{
    switch(action.type){
        case 'occ':
            break;
        case 'eq':
            break;
        case 'aug':
            break;
        case 'tr':
            break;    
    }

    return state;
};
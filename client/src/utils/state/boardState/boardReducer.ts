import { Reducer, useRef } from 'react';

import { GameBoard, Cell, Champ, Item, Trait, Augment } from '../stateclasses';
import { bc } from './boardContext';


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


export const boardReducer: Reducer<bc, any>= ({board, setBoard}, action:any)=>{
    if(setBoard){
        switch(action.type){
            case 'occ':
            //updates values correctly but since the gameBoards value (observed by reacts algo) stays the same it cannot rerender icri
                if(buff.champ){
                    board.matrix[action.r][action.c].occupy(buff.champ);
                    setBoard(new GameBoard(board.matrix));
                } else{
                    board.matrix[action.r][action.c].occupy();
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
    }
    
    return { board, setBoard };
};
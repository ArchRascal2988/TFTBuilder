import { useContext, useReducer } from 'react';

import '../styling/board.scss';

import { GameBoard, Cell} from '../utils/state/stateclasses';
import { BoardContext } from '../utils/state/boardState/boardContext';
import { boardReducer } from '../utils/state/boardState/boardReducer';

const Hex= ({row, column, champ, occupy}:Cell)=>{
    const board= useContext<GameBoard>(BoardContext);
    const [state, dispatch]= useReducer(boardReducer, board);

    console.log(BoardContext, state);


    const dragHandler= (type:string, target:any):undefined=>{
        let el:HTMLElement;

    //cast target correctly to access style and value
        if(target instanceof Element){
            el= target as HTMLElement;
        } else{
            return;
        }

        switch(type){
            case "drop":{
                console.log("hello");
                dispatch({type: 'occ', r: row, c: column});
                console.log(state);
                
            } break;

            case "dragover":{
                el.style.cursor= 'drop';
            } break;

            default: break;
        }
        return;
    }




    if(!champ){
        return(
            <div draggable onDrop={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                dragHandler(e.type, e.target);
            }} onDragOver={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                dragHandler(e.type, e.target);
            }} className="mask hexdiv-empty mask-hexagon" 
            data-row={row} data-collumn={column} data-src=""></div>
        )
    } else{
        return(
            <div draggable onDrop={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                dragHandler(e.type, e.target);
            }} onDragOver={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                dragHandler(e.type, e.target);
            }} className="mask hexdiv-occ mask-hexagon" 
            data-row={row} data-collumn={column} data-src={champ.aviURL}></div>
        )
    }    
}

export default Hex;
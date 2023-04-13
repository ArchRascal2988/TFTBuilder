import { useContext, useEffect, useReducer, useState } from 'react';

import '../styling/board.scss';

import { GameBoard, Cell} from '../utils/state/stateclasses';
import { BoardContext, bc } from '../utils/state/boardState/boardContext';
import { boardReducer } from '../utils/state/boardState/boardReducer';

const Hex= ({row, column, champ, occupy}:Cell)=>{
    const boardContext = useContext<bc>(BoardContext);
    const [state, dispatch]= useReducer(boardReducer, boardContext);
    const [action, setAction]= useState({type: '', r: row, c: column});

    useEffect(()=>{
        dispatch(action);
    }, [action])

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
                setAction({ ...action, type: 'occ',});
                //dispatch({type: 'occ', r: row, c: column});
            } break;

            case "dragover":{
                el.style.cursor= 'drop';
            } break;

            default: break;
        }
        return;
    }




    if(!state.board.matrix[row][column].champ){
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
            data-src=""></div>
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
           style={{"backgroundImage": `url(${state.board.matrix[row][column].champ?.aviURL})`}}></div>
        )
    }    
}

export default Hex;
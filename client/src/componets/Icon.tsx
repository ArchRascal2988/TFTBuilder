import React, { useContext, useReducer } from "react";
import { BoardContext } from "../utils/state/boardState/boardContext";
import { boardReducer } from "../utils/state/boardState/boardReducer";

const Icon= (props:any)=>{
    const boardState= useContext(BoardContext);
    const [state, dispatch]= useReducer(boardReducer, boardState);


    return(
        <div data-id={props.value} style={{width:'6.25rem', height: '6.25rem', margin: '.75rem .25rem'}}>
            <img draggable="true" alt={props.champ.name} style={{cursor:"move"}} className="mask mask-circle avatar" src={props.champ.aviURL}
            onDragStart={()=> dispatch({type: 'buff', bt:'champ', payload: props.champ})}></img>
            <h5>{props.champ.name}</h5>
        </div>
    )
}

export default Icon;
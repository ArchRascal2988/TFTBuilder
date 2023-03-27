import { useContext } from "react";
import { BoardContext } from '../utils/state/boardContext';
import { GameBoard, Cell } from "../utils/state/stateclasses";

import Hex from "./Hex";

const Board= (props:any)=>{

    return(
    <section id='hexboard'>
        <BoardContext.Provider value={props.boardData}>
            {props.boardData.matrix.map((el:Cell[], index:number)=> {
                return <div key={index} className="row">
                    {el.map((el:Cell, index:number)=> 
                        <Hex key={index} row={el.row} 
                        column={el.column} champ={el.champ} 
                        occupy={el.occupy}></Hex>)
                    }
                </div>
            })}
        </BoardContext.Provider>
        
    </section>
    );
}


export default Board;
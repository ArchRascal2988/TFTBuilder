import { useContext } from "react";
import { BoardContext } from '../utils/state/boardState/boardContext';
import { GameBoard, Cell } from "../utils/state/stateclasses";

import Hex from "./Hex";

const Board= (props:any)=>{
    const board= useContext<GameBoard>(BoardContext);


    return(
    <section id='hexboard'>
            {board.matrix.map((el:Cell[], index:number)=> {
                return <div key={index} className="row">
                    {el.map((el:Cell, index:number)=> 
                        <Hex key={index} row={el.row} 
                        column={el.column} champ={el.champ} 
                        occupy={el.occupy}></Hex>)
                    }
                </div>
            })}
    </section>
    );
}


export default Board;
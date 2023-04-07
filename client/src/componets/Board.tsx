import { useContext } from "react";
import { Cell, GameBoard } from "../utils/state/stateclasses";
import {bc, BoardContext} from "../utils/state/boardState/boardContext";

import Hex from "./Hex";

const Board= (props:any)=>{
     const { board } = useContext(BoardContext);


    return(
    <section id='hexboard'>
            {board.matrix.map((el:Cell[], index:number)=> {
                return <div key={index} className="row">
                    {el.map((el:Cell, index:number)=> 
                        <Hex key={index} row={el.row} 
                        column={el.column} champ={el.champ} 
                        heldI={el.heldI} occupy={el.occupy}></Hex>)
                    }
                </div>
            })}
    </section>
    );
}


export default Board;
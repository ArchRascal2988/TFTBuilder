import Hex from "./Hex";

import '../styling/board.scss';
import { GameBoard, Cell } from "../utils/state/stateclasses";

const Board= ({board}:any)=>{
    console.log(board);
    return(
    <section id='hexboard'>
        {board.matrix.map((el:Cell[], index:number)=> 
        el.map((el:Cell, index:number)=> 
        <Hex row={el.row} column={el.column} champ={el.champ} occupy={el.occupy}></Hex>))}
    </section>
    );
}

export default Board;
import Hex from "./Hex";

import '../styling/board.scss';
import { GameBoard, Cell } from "../utils/state/stateclasses";

const Board= ({board}:any)=>{


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

{/* el.map((el:Cell, index:number)=> 
        <Hex key={index} row={el.row} column={el.column} champ={el.champ} occupy={el.occupy}></Hex>)) */}

export default Board;
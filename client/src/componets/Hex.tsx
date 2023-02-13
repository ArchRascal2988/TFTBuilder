import '../styling/board.scss';
import {Cell, Champ} from '../utils/state/stateclasses';

const Hex= ({row, column, champ, occupy}:Cell)=>{
    if(!champ){
        return(
            <div className="hexdiv-empty" data-row={row} data-collumn={column}></div>
        )
    } else{
        return(
            <div className="hexdiv-occ" data-row={row} data-collumn={column} data-champ={champ}></div>
        )
    }    
}

export default Hex;
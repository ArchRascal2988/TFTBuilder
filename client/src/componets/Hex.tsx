import '../styling/board.scss';
import {Cell, Champ} from '../utils/state/stateclasses';

const Hex= ({row, column, champ, occupy}:Cell)=>{

    const dragHandler= (type:string, target:EventTarget):undefined=>{
        console.log(target, type);

        switch(type){
        //do something w occupy method via useReducer 
        }

        return;
    }




    if(!champ){
        return(
            <div onDrop={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                dragHandler(e.type, e.target);
            }} onDragOver={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                dragHandler(e.type, e.target);
            }} className="hexdiv-empty mask-hexagon" 
            data-row={row} data-collumn={column}></div>
        )
    } else{
        return(
            <div onDrop={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                dragHandler(e.type, e.target);
            }} onDragOver={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                dragHandler(e.type, e.target);
            }} className="hexdiv-occ mask-hexagon" 
            data-row={row} data-collumn={column} data-champ={champ}></div>
        )
    }    
}

export default Hex;
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
            <div  draggable onDrop={(e)=>{
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
import '../styling/board.scss';

const Hex= ({boardInfo, champInfo}: {boardInfo:any, champInfo:any})=>{
    if(!champInfo){
        return(
            <div className="hexdiv-empty" data-row={boardInfo} data-collumn={boardInfo}></div>
        )
    } else{
        return(
            <div className="hexdiv-occ" data-row={boardInfo} data-collumn={boardInfo} data-champ={champInfo}></div>
        )
    }    
}

export default Hex;
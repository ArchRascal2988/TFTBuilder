const Hex= ({boardInfo, champInfo}: {boardInfo:Object, champInfo:Object})=>{
    console.log(boardInfo);
    if(!champInfo){
        return(
            <div className="hexdiv-empty" data-row={boardInfo} data-collumn={boardInfo} data-champ={champInfo}></div>
        )
    } else{
        return(
            <div className="hexdiv-occ" data-row={boardInfo} data-collumn={boardInfo} data-champ={champInfo}></div>
        )
    }    
}

export default Hex;
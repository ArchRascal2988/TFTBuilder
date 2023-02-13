import { useState, useEffect, useContext } from 'react';

import Hex from "../Hex";
import Board from "../Board";
import { BoardContext } from '../../utils/state/boardContext';
import { GameBoard } from '../../utils/state/stateclasses';

const Builder= ()=>{
    const boardState= useContext<GameBoard>(BoardContext);

    return(
        <BoardContext.Provider value={new GameBoard()}>
            <Board board={boardState}></Board>
        </BoardContext.Provider>
        
    );
}

export default Builder;
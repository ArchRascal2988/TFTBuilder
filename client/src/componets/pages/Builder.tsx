import { useState, useEffect, useContext } from 'react';

import Hex from "../Hex";
import Board from "../Board";
import { BoardContext } from '../../utils/state/boardContext';
import { GameBoard } from '../../utils/state/stateclasses';

const Builder= ()=>{
    const boardState= useContext<GameBoard>(BoardContext);

    return(
        <Board board={boardState}></Board>
    );
}

export default Builder;
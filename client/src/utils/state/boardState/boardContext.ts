
import React from "react";
import { createContext} from "react";
import { GameBoard } from '../stateclasses';

export interface bc{
    board: GameBoard,
    setBoard: React.Dispatch<React.SetStateAction<GameBoard>> | null
}

export const BoardContext= createContext<bc>({board: new GameBoard(), setBoard: null});
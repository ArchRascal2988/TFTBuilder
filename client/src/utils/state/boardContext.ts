import { createContext, useContext } from "react";
import { GameBoard } from './stateclasses';

export const BoardContext= createContext<GameBoard>(new GameBoard());
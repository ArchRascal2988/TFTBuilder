import { createContext, useContext } from "react";
import {Board, } from './stateclasses';

const BoardContext= createContext(new Board());
export const useBC= () => useContext(BoardContext);

// export const boardProvider= ({children}) => {



// }
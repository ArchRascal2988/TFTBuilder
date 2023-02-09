import { createContext, useContext } from "react";

type champInfo={
    name: string,
    cost: number,
    traits: string[],
    ability:{
        name: string,
        desc: string,
        cost: number[],
        starLvl: string,
        isPrime: false,
        variables:{
            name: string,
            value: number[]
        }
    }

}
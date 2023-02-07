import { useState, useEffect } from 'react';

import Hex from "../Hex";
import Board from "../Board";

const Builder= ()=>{
    const bHexes:{r:number, c:number, champ:string}[][] = [[],[],[],[]];
    const cHexes:{url:string, name:string, cost:number, traits:string[], starLvl:string, isPrime:boolean, ability:any, currItems:any[]}[] = [];
        for(let i:number=0; i<4; i++){
            for(let j:number=0; j<7; j++){
                bHexes[i].push({
                    r: i+1,
                    c: j+1,
                    champ:""
                });
            }
        }
    //eventually for of from query results    
        for(let k:number=0; k<40; k++){
            cHexes.push({
                url: "",
                name: "",
                cost: 0,
                traits: [],
                starLvl: "",
                isPrime: false,
                ability: {},
                currItems: [],
            });
        }
    

    const [BoardState, setBoardState]= useState(bHexes);



    return(
        <div>
            <Board boardState={BoardState}></Board>
        </div>
    );
}

export default Builder;
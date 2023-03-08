import Board from "../Board";
import Icon from "../Icon";
import Container from "../Container"

import { Champ } from "../../utils/state/stateclasses";

import { ALL_CHAMPS } from "../../utils/gql/queries";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

const Builder= ()=>{
    const {loading, error, data}= useQuery(ALL_CHAMPS);
    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    
    return(
        <main>
            <Container>
                <Board></Board>
            </Container>
            <Container>
                {data.allChamps.map((el:any, index:number)=>{
                    
                    return <Icon key={index} value={el._id} champ={new Champ(el.name, el.cost, el.traits, el.ability, el.pngUrl, null)}></Icon>
                })}
            </Container>
               
            
        </main>
    );
}

export default Builder;
import Board from "../Board";
import Icon from "../Icon";
import Container from "../Container"

import '../../styling/board.scss';

import { BoardContext } from "../../utils/state/boardState/boardContext";
import { GameBoard, Champ } from "../../utils/state/stateclasses";

import { ALL_CHAMPS } from "../../utils/gql/queries";
import { useQuery } from "@apollo/client";

//team builder tool
const Builder= ()=>{
    const {loading, error, data}= useQuery(ALL_CHAMPS);
    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    
    return(
        <main style={{display: "flex", justifyContent:"space-between", width:"100%", height: "auto"}}>
            <BoardContext.Provider value={new GameBoard()}>
                <Container title="" styling={"container-def flex-center"}>
                    <Board></Board>
                </Container>
                <Container title="Champ List" styling={"container-scrollable flex-even"}>
                    {data.allChamps.map((el:any, index:number)=>{
                        return <Icon key={index} value={el._id} champ={new Champ(el.name, el.cost, el.traits, el.ability, el.pngUrl, null)}></Icon>
                    })}
                </Container>
            </BoardContext.Provider>
        </main>
    );
}

export default Builder;
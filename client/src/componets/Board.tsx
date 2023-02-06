import Hex from "./Hex";

import '../styling/board.scss';

const Board= ({boardState}:{boardState:Object[][]})=>{
    console.log(boardState);

    return(
    <section id='hexboard'>
        {boardState.map((el, index)=>{
            return <div key={index} className="row">
                {el.map((cell, index)=>{
                return <Hex key={index} boardInfo={cell} champInfo={{}}></Hex>
            })}
            </div>
        })}
    </section>
    );
}

export default Board;
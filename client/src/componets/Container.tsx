import React, { Children, useContext, useEffect, useState } from "react";
import { BoardContext, bc } from "../utils/state/boardState/boardContext";
import { Trait } from "../utils/state/stateclasses";

const Container= (props:any)=>{

    const {board}= useContext<bc>(BoardContext);
    console.log(board);
    const [traits, setTraits]= useState([{}]);
    
    useEffect(()=>{
        board?.traits.forEach((value: number, key: Trait)=>{
            setTraits([...traits, {trait: key, level: value}]);
        })
    }, [])
    
    if(props.title=='Traits'){
        return(
            <section className={props.styling}>
            {props.title &&
                <h2 style={{alignSelf: "flex-start", justifySelf: "flex-start", width:"100%", 
                            margin: "2rem 0", textAlign: "center", position: "sticky", top: "0",
                            backgroundColor: "rgb(0, 0, 0, 0.4)", zIndex:"1"}}>
                    {props.title}
                </h2>
            }
            </section>
        )
    }



    return (
        <section className={props.styling}>
            {props.title &&
                <h2 style={{alignSelf: "flex-start", justifySelf: "flex-start", width:"100%", 
                            margin: "2rem 0", textAlign: "center", position: "sticky", top: "0",
                            backgroundColor: "rgb(0, 0, 0, 0.4)", zIndex:"1"}}>
                    {props.title}
                </h2>
            }
            {props.children}
        </section>
    )
}

export default Container;
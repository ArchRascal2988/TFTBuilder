import React from "react";

const Icon= (props:any)=>{

    return(
        <div data-id={props.value} style={{width:'6.25rem', height: '6.25rem', margin: '.75rem .25rem'}}>
            <img draggable alt={props.champ.name} style={{cursor:"move"}} className="mask mask-circle avatar" src={props.champ.aviURL}></img>
            <h5>{props.champ.name}</h5>
        </div>
    )
}

export default Icon;
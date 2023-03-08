import React from "react";

const Icon= (props:any)=>{

    return(
        <div data-id={props.value} style={{width:'auto', height: 'auto', margin: '.5rem .25rem'}}>
            <img draggable className="mask mask-circle avatar" src={props.champ.aviURL}></img>
            <h5>{props.champ.name}</h5>
        </div>
    )
}

export default Icon;
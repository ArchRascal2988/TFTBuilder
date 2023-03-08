import React from "react";

const Icon= (props:any)=>{
    console.log(props.champ)

    return(
        <div data-id={props.value} style={{width:'auto', height: 'auto', margin: '5rem'}}>
            <img className="mask mask-circle avatar" src={props.champ.aviURL}></img>
        </div>
    )
}

export default Icon;
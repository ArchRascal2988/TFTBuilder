import React, { Children } from "react";

const Container= (props:any)=>{


    return(
        <section>
            {props.children}
        </section>
    )
}

export default Container;
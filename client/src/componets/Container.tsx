import React, { Children } from "react";

const Container= (props:any)=>{

    return (
        <section className={props.styling}>
            {props.title &&
                <h2>
                    {props.title}
                </h2>
            }
            {props.children}
        </section>
    )
}

export default Container;
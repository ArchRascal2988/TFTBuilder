import React, { Children } from "react";

const Container= (props:any)=>{

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
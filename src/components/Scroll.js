import React from "react";

function Scroll(props){
    return(
        <div style={{overflowY:'auto',overflowX:'hidden', border:'3px solid',height:'80vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll
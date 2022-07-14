import React, { useState } from "react";

function CountMiddle(){
    const [count,setCount]=useState(0);

    function addFifty(){
        setCount(50);
    }
    function addValue(current){
        setCount(current)
    }

    return(
            <div>
                <center>
                    <h4 className="btn-text">{count}</h4>
                    <button onClick={()=>addValue(2)} className="timeButton">CLICK ME</button>
                </center>
            </div>
    )
}


export default CountMiddle
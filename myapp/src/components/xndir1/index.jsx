import React, { useState } from "react";
import "./style.css"

 export const Xndirmek = () => {
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    const [boxHeight, setBoxHeight] = useState(0);
    const [boxWidth, setBoxWidth] = useState(0)

    const handleFirstChange = (e) =>{
        setHeight(e.target.value)
    }

    const handleSecondChange = (e) =>{
        setWidth(e.target.value)
    }

    const handleTheClick = () =>{
        setBoxHeight(height === "" ? 0 : height);
        setBoxWidth(width === "" ? 0 : width);
    }

    return <div className="height-width">
        <label>
            <input type="number" onChange={handleFirstChange}/>
        </label>
        <label>
            <input type="number" onChange={handleSecondChange}/>
        </label>
        <button onClick={handleTheClick}>Click</button>
        <div className="box" style={{height: boxHeight + "px", width:boxWidth + "px"}}></div>
    </div>
 }
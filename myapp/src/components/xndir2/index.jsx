import React, { useState } from "react";
import "./style.css"

export const Xndirerku = () => {
  const [number, setNumber] = useState();
  const [color, setColor] = useState("black");

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleClick = () => {
    if (number % 2 === 0) {
      setColor("red");
    }else{
        setColor(color)
    }
  };

  return <div className="odd-even">
      <label>
        <input type="number" onChange={handleChange} />
      </label>
      <button onClick={handleClick}>Click</button>
      <p style={{ color }}>{number}</p>
    </div>
  
}

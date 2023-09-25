import React, { useState } from "react";
import "./style.css"

export const Xndirchors = () => {
  const [backgroundColor, setBackgroundColor] = useState("");

  const changeClick = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

    
    setBackgroundColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div>
      <button className="click" onClick={changeClick}>Click</button>
      <div style={{ backgroundColor }}></div>
    </div>
  );
};

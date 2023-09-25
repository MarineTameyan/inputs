import React, { useState } from "react";
import "./style.css";

export const Xndirereq = () => {
  const [changeHeight, setChangeHeight] = useState(50);
  const [changeWidth, setChangeWidth] = useState(50);

  const changeStyle = () => {
    setChangeHeight(changeHeight + 25);
    setChangeWidth(changeWidth + 25);
  };

  return (
    <>
      <div
        className="change-style"
        style={{ height: changeHeight + 'px', width: changeWidth + 'px' }}
        onClick={changeStyle}
      ></div>
    </>
  );
};





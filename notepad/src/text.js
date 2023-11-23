import React, { useState } from 'react';
import './text.css';

function Text(props) {
  const { fontSize } = props;
  const [colorj,setColor]=useState("black");

  function red()
  {
    setColor("red");
  }
  
  const textareaStyle = {
    fontSize: `${fontSize}px`,
    color:`${colorj}`
  };

  return (
    <div>
      <div></div>
      <textarea style={textareaStyle} type="text" name="notes" />
      <button onClick={red}>Red Colour</button>
    </div>
  );
}

export default Text;

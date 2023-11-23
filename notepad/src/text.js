import React, { useState } from 'react';
import './text.css';

function Text(props) {
  const { fontSize } = props;
  const [colorj,setColor]=useState("black");

  function red()
  {
    setColor("red");
  }
  var blue=()=>{
    setColor("blue");
  }
  var orange=()=>{
    setColor("orange");
  }
  var yellow=()=>{
    setColor("yellow");
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
      <button onClick={blue}>Blue Colour</button>
      <button onClick={orange}>Orange Colour</button>
      <button onClick={yellow}>Yellow Colour</button>
    </div>
  );
}

export default Text;

import React from 'react';
import './text.css';

function Text(props) {
  const { fontSize } = props;

  const textareaStyle = {
    fontSize: `${fontSize}px`
  };

  return (
    <div>
      <div></div>
      <textarea style={textareaStyle} type="text" name="notes" />
    </div>
  );
}

export default Text;

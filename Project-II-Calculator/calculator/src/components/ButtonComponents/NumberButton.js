import React from 'react';
import './Button.css';

function NumberButton(props) {
  const {buttonStyle, text} = props.button;
  
  return (
      <button className={buttonStyle}>{text}</button>
    );
  }

export default NumberButton;
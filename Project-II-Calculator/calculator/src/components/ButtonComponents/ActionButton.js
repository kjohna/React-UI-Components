import React from 'react';
import './Button.css';

function ActionButton(props) {
  
  return (
      <button className={props.buttonStyle} onClick={props.onClick}>{props.text}</button>
    );
  }

export default ActionButton;
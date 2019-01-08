import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calculator-container">
      <Display />
      <div className="buttons-row-1">
        <ActionButton buttonStyle="button-white" text="clear" />
        <NumberButton buttonStyle="button-red" text="÷" />
      </div>
      <div className="buttons-row-2"></div>
        <NumberButton buttonStyle="button-red" text="7" />
        <NumberButton buttonStyle="button-red" text="8" />
        <NumberButton buttonStyle="button-red" text="9" />
        <NumberButton buttonStyle="button-red" text="x" />
      <div className="buttons-row-3"></div>
        <NumberButton buttonStyle="button-red" text="4" />
        <NumberButton buttonStyle="button-red" text="5" />
        <NumberButton buttonStyle="button-red" text="6" />
        <NumberButton buttonStyle="button-red" text="-" />
      <div className="buttons-row-4"></div>
        <NumberButton buttonStyle="button-red" text="1" />
        <NumberButton buttonStyle="button-red" text="2" />
        <NumberButton buttonStyle="button-red" text="3" />
        <NumberButton buttonStyle="button-red" text="+" />
      <div className="buttons-row-5"></div>
        <ActionButton buttonStyle="button-white" text="0" />
        <NumberButton buttonStyle="button-red" text="=" />
    </div>
  );
};

export default App;

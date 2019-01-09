import React, { Component } from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      buffer: null,
      operation: null
    };
  }

  render () {
    return (
      <div className="calculator-container">
        <CalculatorDisplay total={this.state.total}/>
        <div className="buttons-row-1">
          <ActionButton buttonStyle="button-white button-wide" text="clear" />
          <NumberButton buttonStyle="button-red" text="÷" />
        </div>
        <div className="buttons-row-2">
          <NumberButton buttonStyle="button-white" text="7" />
          <NumberButton buttonStyle="button-white" text="8" />
          <NumberButton buttonStyle="button-white" text="9" />
          <NumberButton buttonStyle="button-red" text="×" />
        </div>
        <div className="buttons-row-3">
          <NumberButton buttonStyle="button-white" text="4" />
          <NumberButton buttonStyle="button-white" text="5" />
          <NumberButton buttonStyle="button-white" text="6" />
          <NumberButton buttonStyle="button-red" text="−" />
        </div>
        <div className="buttons-row-4">
          <NumberButton buttonStyle="button-white" text="1" />
          <NumberButton buttonStyle="button-white" text="2" />
          <NumberButton buttonStyle="button-white" text="3" />
          <NumberButton buttonStyle="button-red" text="+" />
        </div>
        <div className="buttons-row-5">
          <ActionButton buttonStyle="button-white button-wide" text="0" />
          <NumberButton buttonStyle="button-red" text="=" />
        </div>
      </div>
    );
  }

  numPress (num) {
  }
};

export default App;

import React, { Component } from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 7,
      buffer: null,
      operation: null
    };
  }

  clickHandler(btnPressed) {
    console.log(btnPressed);
  }

  render () {
    return (
      <div className="calculator-container">
        <CalculatorDisplay total={this.state.total}/>
        <div className="buttons-row-1">
          <ActionButton buttonStyle="button-white button-wide" text="clear" onClick={this.clickHandler.bind(this, "clear")} />
          <NumberButton buttonStyle="button-red" text="÷" onClick={this.clickHandler.bind(this, "/")} />
        </div>
        <div className="buttons-row-2">
          <NumberButton buttonStyle="button-white" text="7" onClick={this.clickHandler.bind(this, "7")} />
          <NumberButton buttonStyle="button-white" text="8" onClick={this.clickHandler.bind(this, "8")} />
          <NumberButton buttonStyle="button-white" text="9" onClick={this.clickHandler.bind(this, "9")} />
          <NumberButton buttonStyle="button-red" text="×" onClick={this.clickHandler.bind(this, "x")} />
        </div>
        <div className="buttons-row-3">
          <NumberButton buttonStyle="button-white" text="4" onClick={this.clickHandler.bind(this, "4")} />
          <NumberButton buttonStyle="button-white" text="5" onClick={this.clickHandler.bind(this, "5")} />
          <NumberButton buttonStyle="button-white" text="6" onClick={this.clickHandler.bind(this, "6")} />
          <NumberButton buttonStyle="button-red" text="−" onClick={this.clickHandler.bind(this, "-")} />
        </div>
        <div className="buttons-row-4">
          <NumberButton buttonStyle="button-white" text="1" onClick={this.clickHandler.bind(this, "1")} />
          <NumberButton buttonStyle="button-white" text="2" onClick={this.clickHandler.bind(this, "2")} />
          <NumberButton buttonStyle="button-white" text="3" onClick={this.clickHandler.bind(this, "3")} />
          <NumberButton buttonStyle="button-red" text="+" onClick={this.clickHandler.bind(this, "+")} />
        </div>
        <div className="buttons-row-5">
          <ActionButton buttonStyle="button-white button-wide" text="0" onClick={this.clickHandler.bind(this, "0")} />
          <NumberButton buttonStyle="button-red" text="=" onClick={this.clickHandler.bind(this, "=")} />
        </div>
      </div>
    );
  }

};

export default App;

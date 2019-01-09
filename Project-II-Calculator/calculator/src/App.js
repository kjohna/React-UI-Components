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

  clickHandler(btnPressed) {
    console.log("button pressed: ", btnPressed);

    if (typeof btnPressed === 'number' || btnPressed === 0) {
      // number was pressed
      if (this.state.operation === null){
        // simply update total
        this.setState((state) => {
          return {
            total: (state.total * 10) + btnPressed
          };
        });
      } else {
        // operation was pressed but hasn't been eval'd
        if (this.state.total === this.state.buffer) {
          // operation was just pressed, total still holds previous result (entered or result of an eval)
          // start updating total with new value
          this.setState((state) => {
            return {
              buffer: state.total,
              total: btnPressed,
            };
          });
        } else {
          // operation was pressed previously but still accepting updates to total
          this.setState((state) => {
            return {
              total: (state.total*10) + btnPressed,
            };
          });
        }
        
      }      
    } else if (btnPressed === 'clear') {
      this.setState((state) => {
        return {
          total: 0,
          buffer: null,
          operation: null
        };
      });
    }else if (btnPressed === '=') {
      if (this.state.buffer != null) {
        // console.log("= pressed, do operation");
        // perform operation with buffer and total
        this.setState((state) => {
          return {
            total: eval(`${state.buffer}${state.operation}${state.total}`),
            buffer: null
          };
        });
      } else {
        // // perform operation with total and total
        // this.setState((state) => {
        //   return {
        //     total: eval(`${state.total}${state.operation}${state.total}`)
        //   };
        // });
      }
      // console.log("= pressed, no operation selected");
    } else {
      // operation was pressed
      if (this.state.buffer === null) {
        // nothing in buffer, put current total into buffer
        this.setState((state) => {
          return {
            buffer: state.total,
            operation: btnPressed
          };
        });
      } else {
        // something already in buffer, change operation
        this.setState((state) => {
          return {
            operation: btnPressed
          };
        });
      }
    }
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
          <NumberButton buttonStyle="button-white" text="7" onClick={this.clickHandler.bind(this, 7)} />
          <NumberButton buttonStyle="button-white" text="8" onClick={this.clickHandler.bind(this, 8)} />
          <NumberButton buttonStyle="button-white" text="9" onClick={this.clickHandler.bind(this, 9)} />
          <NumberButton buttonStyle="button-red" text="×" onClick={this.clickHandler.bind(this, "*")} />
        </div>
        <div className="buttons-row-3">
          <NumberButton buttonStyle="button-white" text="4" onClick={this.clickHandler.bind(this, 4)} />
          <NumberButton buttonStyle="button-white" text="5" onClick={this.clickHandler.bind(this, 5)} />
          <NumberButton buttonStyle="button-white" text="6" onClick={this.clickHandler.bind(this, 6)} />
          <NumberButton buttonStyle="button-red" text="−" onClick={this.clickHandler.bind(this, "-")} />
        </div>
        <div className="buttons-row-4">
          <NumberButton buttonStyle="button-white" text="1" onClick={this.clickHandler.bind(this, 1)} />
          <NumberButton buttonStyle="button-white" text="2" onClick={this.clickHandler.bind(this, 2)} />
          <NumberButton buttonStyle="button-white" text="3" onClick={this.clickHandler.bind(this, 3)} />
          <NumberButton buttonStyle="button-red" text="+" onClick={this.clickHandler.bind(this, "+")} />
        </div>
        <div className="buttons-row-5">
          <ActionButton buttonStyle="button-white button-wide" text="0" onClick={this.clickHandler.bind(this, 0)} />
          <NumberButton buttonStyle="button-red" text="=" onClick={this.clickHandler.bind(this, "=")} />
        </div>
      </div>
    );
  }

};

export default App;

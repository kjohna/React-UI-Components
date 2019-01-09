import React, {Component} from 'react';
import './Display.css';

class CalculatorDisplay extends Component {

  render () {

    return (
      <div className="display-container">
          {this.props.total}
      </div>
    );
  }
}

export default CalculatorDisplay;
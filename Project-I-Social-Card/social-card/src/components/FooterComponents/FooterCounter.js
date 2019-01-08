import React, { Component } from 'react';
import './Footer.css';

class FooterCounter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const count=this.props.count;
    return (
      <div className={this.props.className}>
        {count}
      </div>
    );
  }
}

export default FooterCounter;
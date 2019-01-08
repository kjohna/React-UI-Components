import React, { Component } from 'react';
import './Footer.css';

class FooterIcon extends Component {
  
  render() {
    const className=this.props.className;
    const imgSrc=this.props.imgSrc;

    return (
      <div className="footer-icon-container">
        <img src={imgSrc} className={className}></img>
      </div>
    );
  }
}

export default FooterIcon;
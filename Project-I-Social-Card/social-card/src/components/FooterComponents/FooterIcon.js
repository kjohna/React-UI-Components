import React, { Component } from 'react';
import './Footer.css';
import FooterCounter from './FooterCounter';

class FooterIcon extends Component {
  
  render() {
    const className=this.props.className;
    const imgSrc=this.props.imgSrc;
    const count=this.props.count;

    return (
      <div className="footer-icon-container">
        <img src={imgSrc} className={className} alt=""></img>
        <FooterCounter className={`footer-counter`} count={count} />
      </div>
    );
  }
}

export default FooterIcon;
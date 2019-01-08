import React, { Component } from 'react';
import './Footer.css';
import FooterIcon from './FooterIcon';
import footerComment from '../../img/outline-chat_bubble_outline-24px.svg';
import footerShare from '../../img/outline-autorenew-24px.svg';
import footerFavorite from '../../img/outline-favorite_border-24px.svg';
import footerMail from '../../img/outline-mail_outline-24px.svg';

class FooterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }
  
  render() {
    console.log(this.state);
    let shareCount = 6;
    let likeCount = 4;
    return(
      <div className="footer-container">
        <FooterIcon className="footer-comment" imgSrc={footerComment} />
        <FooterIcon className="footer-share" imgSrc={footerShare} count={shareCount} />
        <FooterIcon className="footer-favorite" imgSrc={footerFavorite} count={likeCount} />
        <FooterIcon className="footer-mail" imgSrc={footerMail} />
      </div>
    );
  }
}

export default FooterContainer;
import React, { Component } from 'react';
import './Footer.css';
import FooterIcon from './FooterIcon';
import footerComment from '../../img/outline-chat_bubble_outline-24px.svg';
import footerShare from '../../img/outline-autorenew-24px.svg';
import footerFavorite from '../../img/outline-favorite_border-24px.svg';
import footerMail from '../../img/outline-mail_outline-24px.svg';

class FooterContainer extends Component {
  render() {
    return(
      <div className="footer-container">
        <FooterIcon className="footer-comment" imgSrc={footerComment}/>
        <div className="footer-icon-container footer-comment">
          <img src={footerComment} className="footer-comment-img"></img>
        </div>
        <div className="footer-icon-container footer-share">
          <img src={footerShare} className="footer-share-img"></img>
          <div className="footer-counter footer-share-count">6</div>
        </div>
        <div className="footer-icon-container footer-favorite">
          <img src={footerFavorite} className="footer-favorite-img"></img>
          <div className="footer-counter footer-favorite-count">4</div>
        </div>
        <div className="footer-icon-container footer-mail">
          <img src={footerMail} className="footer-mail-img"></img>
        </div>
      </div>
    );
  }
}

export default FooterContainer;
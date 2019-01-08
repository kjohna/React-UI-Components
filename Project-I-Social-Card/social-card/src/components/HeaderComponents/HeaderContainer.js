import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

function Header() {
  return (
    <div className="header-container">
      <div className="header-container-top">
        <ImageThumbnail />
        <HeaderTitle />      
      </div>
      <div className="header-container-bottom">
        <HeaderContent />
      </div>
    </div>
  );
}

export default Header;
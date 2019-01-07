import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

function Header() {
  return (
    <div className="header-container">
      <ImageThumbnail />
      <HeaderTitle />
    </div>
  );
}

export default Header;
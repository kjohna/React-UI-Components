import React from 'react';
import './Header.css';
import thumbSrc from '../../img/lambda-logo.jpg';

function ImageThumbnail() {
  return (
    <div>
      <img src={thumbSrc} className="header-thumb"></img>
    </div>
  );
}

export default ImageThumbnail;
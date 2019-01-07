import React from 'react';
import './Header.css';
import thumbSrc from '../../img/lambda-logo.jpg';

function ImageThumbnail() {
  return (
    <React.Fragment>
      <img src={thumbSrc} className="header-thumb"></img>
    </React.Fragment>
  );
}

export default ImageThumbnail;
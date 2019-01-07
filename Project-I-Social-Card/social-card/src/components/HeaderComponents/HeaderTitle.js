import React from 'react';
import './Header.css';

function HeaderTitle() {
  return (
    <div className="header-title">
      <div className="header-name">
        Lambda School
      </div>
      <div className="header-handle">
        @LambdaSchool
      </div>
      <div className="header-timestamp">
        • 26 jan
      </div>
    </div>
  );
}

export default HeaderTitle;
import React from 'react';
import './Card.css';

function CardContent() {
  return (
    <div className="card-content">
      <h3>Get started  with React</h3>
      <p>
        React makes it painless to create interactive UIs. Design simple views for each state in your application.
      </p>
      {/* putting a div here instead of <a> since all of CardContent is in an <a>. */}
      <div className="card-content-src">
        reactjs.org
      </div>
    </div>
  );
}

export default CardContent;
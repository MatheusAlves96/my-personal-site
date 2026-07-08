import React from 'react';
import './Background.css';

const Background = ({ children }) => {
  return (
    <div className="background-container">
      <ul className="circles">
        {[...Array(40)].map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
      <div className="content">{children}</div>
    </div>
  );
};

export default Background;

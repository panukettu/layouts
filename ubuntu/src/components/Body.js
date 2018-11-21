import React from 'react';

import './Body.css';

export const SubHeader = ({ children }) => (
  <div className="content__subheader">
    <h2>
      <span>{children}</span>
    </h2>
  </div>
);

export const FullImage = ({ src, ...props }) => (
  <div className="content__image" {...props}>
    <img src={src} alt="img" style={{ width: '100%', height: '100%' }} />
  </div>
);

const Body = ({ children }) => {
  return (
    <div className="body">
      <div className="content">
        <div className="content__body">{children}</div>
      </div>
    </div>
  );
};

export default Body;

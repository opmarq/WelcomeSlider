import React from "react";

import "./style.scss";

export const CardImage = ({ image, ...props }) => {
  return (
    <div className="card card--image" {...props}>
      <img className="card__image" src={image} alt="card" />
      <span className="card__ima fas fa-search" />
    </div>
  );
};

export const CardVideo = ({ image, ...props }) => {
  return (
    <div className="card card--video" {...props}>
      <img className="card__image" src={image}  alt="card" />
      <div className="card__content">
        <div className="card__meta">
          <span className="card__play fas fa-play" />
          <div className="card__metacontent">
            {
              props.children
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardQuote = ({ children, ...props }) => {
  return (
    <div className="card card--quote" {...props}>
      <blockquote className="card__quote">{children}</blockquote>
    </div>
  );
};

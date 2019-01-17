import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

export const CardImage = ({ image, ...props }) => {
  return (
    <div className="card card--image" {...props}>
      <img className="card__image" src={image} />
      <span className="card__image-zoom fas fa-search" />
    </div>
  );
};

export const CardVideo = ({ image, ...props }) => {
  return (
    <div className="card card--video" {...props}>
      <img className="card__image" src={image} />
      <div className="card__content">
        <div className="card__meta">
          <span className="card__play fas fa-play" />
          <div className="card__metacontent">
            <h2>Hello World</h2>
            <p>Co-Founder</p>
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

CardVideo.PropTypes = {
  image: PropTypes.string
};

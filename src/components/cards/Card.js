import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

export const CardImage = ({ image, children }) => {
  return (
    <div className="card">
      <img className="card__image" src={image} />
    </div>
  );
};

export const CardVideo = ({ image, children }) => {
  return (
    <div className="card">
      <img className="card__image" src={image} />
      <div className="card__content">
        <div class="card__video">
          <span class="navigation__arrow navigation__arrow--left fas fa-play" />
          <div>
            <h2>Hello World</h2>
            <p>Co-Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardQuote = ({ children }) => {
  return (
    <div className="card">
      <blockquote className="card_quote">{children}</blockquote>
    </div>
  );
};

CardVideo.PropTypes = {
  image: PropTypes.string
};

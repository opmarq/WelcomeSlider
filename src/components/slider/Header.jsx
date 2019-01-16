import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./style/slider.scss";

library.add(...[faArrowLeft, faArrowRight]);

const Header = ({ logo, name, onClick }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="logo__img" src={logo} alt="" />
        <h1 className="logo__title">{name}</h1>
      </div>
      <div className="header__navigation navigation">
        <span
          class="navigation__arrow navigation__arrow--left fas fa-arrow-left"
          onClick={onClick.bind("left")}
        />
        <span
          class="navigation__arrow navigation__arrow--right fas fa-arrow-right"
          onClick={onClick.bind("right")}
        />
      </div>
    </header>
  );
};

export default Header;

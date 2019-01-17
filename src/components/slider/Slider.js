import React, { Component } from "react";
import propTypes from "prop-types";

import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

import logo from "../../logo.svg";

class Slider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { options } = this.props;
    return (
      <div className="slider">
        <Header
          name="Welcome To the jungle"
          onClick={console.log}
          logo={logo}
        />
        <Container rows={options.rows} cols={options.cols}>
          {this.props.children}
        </Container>
        <Footer className="footer">
          <img src={logo} alt="footer logo" className="logo__img" />
          <a href="http://google.com" className="footer__link">
            Voir le Profile
          </a>
        </Footer>
      </div>
    );
  }
}

export default Slider;

import React, { Component } from "react";
import propTypes from "prop-types";

import Header from "./Header";
import Container from "./Container";
import Progress from "./Progress";
import Footer from "./Footer";

import logo from "../../logo.svg";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: props.options.cols
    };
  }

  handleNavigation = side => {
    let { progress } = this.state;
    const { options, children } = this.props;

    if (
      progress + side >= options.cols &&
      progress + side <= children.length / options.rows
    ) {
      this.setState({
        progress: progress + side
      });
    }
  };

  render() {
    const { options, children } = this.props;
    const { progress } = this.state;
    return (
      <div className="slider">
        <Header
          name="Welcome To the jungle"
          onClick={this.handleNavigation}
          logo={logo}
        />
        <Container rows={options.rows} cols={options.cols} progress={progress}>
          {this.props.children}
        </Container>
        <Progress
          min={0}
          max={children.length / options.rows}
          progress={progress}
        />
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

Slider.defaultProps = {
  options: {
    cols: 3,
    rows: 2
  }
};

export default Slider;

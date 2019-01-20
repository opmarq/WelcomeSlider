import React, { Component } from "react";

import Header from "./Header";
import Container from "./Container";
import Progress from "./Progress";
import Footer from "./Footer";

import logo from "../../logo.svg";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakPoints: Object.keys(props.options).sort(),
      cols: 1,
      rows: 1,
      progress: 1
    };
  }

  componentDidMount = () => {
    this.handleResponsiveness();
    window.addEventListener("resize", this.handleResponsiveness);
  };

  static getDerivedStateFromProps(props, state) {
    return {
      breakPoints: Object.keys(props.options).sort()
    };
  }

  handleResponsiveness = () => {

    const { options } = this.props;
    const { breakPoints } = this.state;
    let currentWidth = window.innerWidth;
    for (let i = breakPoints.length - 1; i >= 0; i--) {
      if (currentWidth > breakPoints[i]) {
        let matched = options[breakPoints[i]];
        this.setState({
          ...this.state,
          cols: matched.cols,
          rows: matched.rows,
          progress: matched.cols
        })
        break;
      }
    }
  }

  handleNavigation = side => {
    let { progress, cols, rows } = this.state;
    const { children } = this.props;

    if (
      progress + side >= cols &&
      progress + side <= children.length / rows
    ) {
      this.setState({
        progress: progress + side
      });
    }
  };

  render() {
    const { children } = this.props;
    const { progress, cols, rows } = this.state;
    return (
      <div className="slider">
        <Header
          name="Welcome To the jungle"
          onClick={this.handleNavigation}
          logo={logo}
        />
        <Container rows={rows} cols={cols} progress={progress}>
          {this.props.children}
        </Container>
        <Progress
          min={0}
          max={children.length / rows}
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

export default Slider;

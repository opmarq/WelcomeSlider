import React, { Component } from "react";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions);
  };

  render() {
    const { height, width } = this.state;
    const { cols, rows } = this.props;

    const cardHeight = Math.round(height / rows);
    const cardWidth = Math.round(width / cols);

    return (
      <div className="slider__container">
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            style: {
              ...child.props.style,
              height: cardHeight,
              width: cardWidth
            }
          });
        })}
      </div>
    );
  }
}

Container.defaultProps = {
  cols: 3,
  rows: 2
};

export default Container;

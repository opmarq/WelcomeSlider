import React, { Component } from "react";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight - 200,
      blockOfCards: []
    };
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight - 200
    });
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions);
  };

  buildCards = () => {
    const { height, width } = this.state;
    const { cols, rows, children, progress } = this.props;
    const cardHeight = height / rows;
    const cardWidth = width / cols;
    const screenSize = cols * rows;

    let blockOfCards = [[]];
    let counter = 0;
    for (let i = 0; i < children.length; i++) {

      if (i % screenSize === 0 && i !== 0) {
        counter++
        blockOfCards[counter] = [];
      }
      blockOfCards[counter].push(children[i])
    }
    return (
      <div
        className="slider__scroll"
        style={{ transform: `translateX(-${progress * cardWidth}px)` }}
      >
        {blockOfCards.map((item, index) => {
          return (
            <div style={{ float: "left", width: width }}>
              {React.Children.map(blockOfCards[index], (child, index) => {
                return React.cloneElement(child, {
                  style: {
                    ...child.props.style,
                    height: cardHeight,
                    width: cardWidth,
                    float: "left"
                  }
                });
              })}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { height } = this.state;
    return (
      <div className="slider__container" style={{ height: height }}>
        {this.buildCards()}
      </div>
    );
  }
}

Container.defaultProps = {
  cols: 3,
  rows: 2
};

export default Container;

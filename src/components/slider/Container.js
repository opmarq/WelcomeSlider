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
    const cardHeight = Math.round(height / rows);
    const cardWidth = Math.round(width / cols);
    const screenSize = cols * rows;

    console.log(children);

    let blockOfCards = [];

    for (let i = 1; i <= Math.round(children.length / screenSize); i++) {
      blockOfCards[i] = [];
      for (let j = 1; j <= screenSize; j++) {
        blockOfCards[i].push(children[i * j - 1]);
      }
    }

    console.log(blockOfCards);

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

    console.log(blockOfCards);
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

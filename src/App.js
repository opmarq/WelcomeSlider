import React, { Component } from "react";
import Slider from "./components/slider/Slider";
import { CardImage, CardVideo, CardQuote } from "./components/cards/Card";

import "./App.scss";
import "./components/slider/slider.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.options = {
      0: {
        cols: 2,
        rows: 2
      },
      1024: {
        cols: 3,
        rows: 2
      }
    };
  }

  render() {
    return (
      <Slider options={this.options}>
        <CardImage
          image={
            "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?cs=srgb&dl=architecture-buildings-church-338515.jpg&fm=jpg"
          }
        />
        <CardVideo
          image={
            "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?cs=srgb&dl=architecture-buildings-church-338515.jpg&fm=jpg"
          }
        />
        <CardQuote>Lis is short, work somewhere awsome</CardQuote>
        <CardImage
          image={
            "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?cs=srgb&dl=architecture-buildings-church-338515.jpg&fm=jpg"
          }
        />
        <CardVideo
          image={
            "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?cs=srgb&dl=architecture-buildings-church-338515.jpg&fm=jpg"
          }
        />
        <CardQuote>Lis is short, work somewhere awsome</CardQuote>
        <CardImage
          image={
            "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?cs=srgb&dl=architecture-buildings-church-338515.jpg&fm=jpg"
          }
        />
        <CardVideo
          image={
            "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?cs=srgb&dl=architecture-buildings-church-338515.jpg&fm=jpg"
          }
        />
        <CardQuote>Lis is short, work somewhere awsome</CardQuote>
        <CardImage
          image={
            "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?cs=srgb&dl=architecture-buildings-church-338515.jpg&fm=jpg"
          }
        />
        <CardVideo
          image={
            "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?cs=srgb&dl=architecture-buildings-church-338515.jpg&fm=jpg"
          }
        />
        <CardQuote>Lis is short, work somewhere awsome</CardQuote>
      </Slider>
    );
  }
}

export default App;

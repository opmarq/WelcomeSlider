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
        cols: 5,
        rows: 2
      }
    };
  }

  render() {
    return (
      <Slider options={this.options}>
        <CardQuote>1</CardQuote>
        <CardQuote>2</CardQuote>
        <CardQuote>3</CardQuote>
        <CardQuote>4</CardQuote>
        <CardQuote>5</CardQuote>
        <CardQuote>6</CardQuote>
        <CardQuote>7</CardQuote>
        <CardQuote>8</CardQuote>
        <CardQuote>9</CardQuote>
        <CardQuote>10</CardQuote>
        <CardQuote>11</CardQuote>
        <CardQuote>12</CardQuote>
      </Slider>
    );
  }
}

export default App;

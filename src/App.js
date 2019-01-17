import React, { Component } from "react";
import Slider from "./components/slider/Slider";

import "./App.scss";
import "./components/slider/slider.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.options = {
      cols: 3,
      rows: 2
    };
  }

  render() {
    return (
      <Slider options={this.options}>
        <div>hello World</div>
        <div>hello Omar</div>
        <div>hello Chajia</div>
      </Slider>
    );
  }
}

export default App;

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
        cols: 1,
        rows: 1
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
        <CardQuote>Nothing else matters.</CardQuote>
        <CardImage image={"http://lorempixel.com/900/801/"} />
        <CardVideo image={"http://lorempixel.com/900/802/"} />
        <CardImage image={"http://lorempixel.com/900/803/"} />
        <CardVideo image={"http://lorempixel.com/900/804/"} />
        <CardQuote>Nothing else matters.</CardQuote>
        <CardQuote>Nothing else matters.</CardQuote>
        <CardImage image={"http://lorempixel.com/900/801/"} />
        <CardVideo image={"http://lorempixel.com/900/802/"} />
        <CardImage image={"http://lorempixel.com/900/803/"} />
        <CardVideo image={"http://lorempixel.com/900/804/"} />
        <CardQuote>Nothing else matters.</CardQuote>
        <CardQuote>Nothing else matters.</CardQuote>
        <CardImage image={"http://lorempixel.com/900/801/"} />
        <CardVideo image={"http://lorempixel.com/900/802/"} />
        <CardImage image={"http://lorempixel.com/900/803/"} />
        <CardVideo image={"http://lorempixel.com/900/804/"} />
        <CardQuote>Nothing else matters.</CardQuote>
      </Slider>
    );
  }
}

export default App;

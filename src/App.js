import React, { Component } from "react";
import Slider from "./components/slider/Slider";
import { CardImage, CardVideo, CardQuote } from "./components/cards/Card";

import urlParser from "./helpers/urlparser";

import "./App.scss";
import "./components/slider/slider.scss";

class App extends Component {
  constructor(props) {

    super(props);

    let params = urlParser(window.location.href)
    debugger;
    this.options = {
      0: {
        cols: 1,
        rows: 1
      },
      1024: {
        cols: params.cols || 3,
        rows: params.rows || 2
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
        <CardVideo image={"http://lorempixel.com/900/844/"} >
          <h2>Omar Chajia</h2>
          <p>Co-Founder</p>
        </CardVideo>
        <CardQuote>Nothing else matters.</CardQuote>
        <CardQuote>Nothing else matters.</CardQuote>
        <CardImage image={"http://lorempixel.com/900/801/"} />
        <CardVideo image={"http://lorempixel.com/900/864/"} >
          <h2>Omar Chajia</h2>
          <p>Co-Founder</p>
        </CardVideo>
        <CardImage image={"http://lorempixel.com/900/810/"} />
        <CardVideo image={"http://lorempixel.com/900/804/"} >
          <h2>Omar Chajia</h2>
          <p>Co-Founder</p>
        </CardVideo>
        <CardQuote>Nothing else matters.</CardQuote>
        <CardQuote>Nothing else matters.</CardQuote>
        <CardImage image={"http://lorempixel.com/900/831/"} />
        <CardVideo image={"http://lorempixel.com/900/854/"} >
          <h2>Omar Chajia</h2>
          <p>Co-Founder</p>
        </CardVideo>
        <CardImage image={"http://lorempixel.com/900/853/"} />
        <CardVideo image={"http://lorempixel.com/900/8044/"} >
          <h2>Omar Chajia</h2>
          <p>Co-Founder</p>
        </CardVideo>
        <CardQuote>Nothing else matters.</CardQuote>
      </Slider>
    );
  }
}

export default App;

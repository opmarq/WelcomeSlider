import React, { Component } from "react";

import Header from "./components/slider/Header";

import "./App.scss";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          name="Welcome To the jungle"
          onClick={console.log}
          logo={logo}
        />
      </div>
    );
  }
}

export default App;

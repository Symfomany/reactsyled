import React, { Component } from "react";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
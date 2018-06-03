import React, { Component } from "react";
import { Button, ButtonOutline } from "../styled/Button";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ButtonOutline theme={{ fg: "orange" }}>Cliquez-moi ici</ButtonOutline>
        <ButtonOutline>Cliquez-moi</ButtonOutline>
        <Button>Cliquez-moi ici</Button>
      </div>
    );
  }
}

export default Main;

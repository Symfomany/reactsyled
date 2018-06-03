import React, { Component } from "react";
import Home from "./Home";
import Card from "../facc/Card";

import { Container, Row, Col } from "styled-bootstrap-grid";
import Menu from "../facc/Menu";
import styled from "styled-components";

const ItemMenu = styled.li`
  color: ${props => (props.active ? "gold" : "black")};
  margin: 1.2rem;
  font-size: 1.2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  list-style: none;
  font-weight: ${props => (props.active ? "bolder" : "thin")};
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Card
          id="myCard"
          title="Je suis Charlie"
          image="https://www.voyageway.com/wp-content/uploads/2015/10/reduire-son-budget-voyage-600x358.jpg"
        >
          <Menu className="supermenu">
            <ItemMenu active>One</ItemMenu>
            <ItemMenu>Two</ItemMenu>
            <ItemMenu>Three</ItemMenu>
          </Menu>
          <Home text="Titre de ma page" />
        </Card>
      </Container>
    );
  }
}

export default App;

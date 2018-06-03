import React, { Component } from "react";
import withTheme from "../hoc/withTheme";
import styled from "styled-components";
import Title from "./Title";
import { Row, Col } from "styled-bootstrap-grid";

const Paragraph = styled.p`
  color: ${props => (props.gold ? "gold" : "brown")};
`;

const Button = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px ${props => (props.help ? "dotted" : "solid")}; palevioletred;
  border-radius: 3px;
`;

const ButtonWarning = Button.extend`
  color: orange;
  font-weight: 500;
  border-color: orange;
`;

const Wrapper = styled.p`
  color: pink;
  font-style: italic;
  text-transform: lowercase;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const BeautifulTitle = styled(Title)`
  color: palevioletred;
  font-weight: bold;
`;

const BeautifulTitleSon = BeautifulTitle.extend`
  color: blanchedalmond;
  font-weight: 100;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Row>
          <Col col xl="1" lg="2" md="3" sm="6">
            Hello Bootstrap Layout
          </Col>
        </Row>
        <Row>
          <BeautifulTitle />
        </Row>
        <Row>
          <BeautifulTitleSon />
        </Row>
        <Wrapper>
          <Title />
          <Paragraph gold>{this.props.text}</Paragraph>
          <Input type="search" placeholder="@mxstbr" />
          <Button>Normal</Button>
          <Button primary>Primary</Button>
          <ButtonWarning help>Warning</ButtonWarning>
        </Wrapper>
      </div>
    );
  }
}

export default withTheme(Home);

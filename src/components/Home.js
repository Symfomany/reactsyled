import React, { Component } from "react";
import withTheme from "../hoc/withTheme";
import styled, { keyframes } from "styled-components";
import Title from "./Title";
import { Row, Col } from "styled-bootstrap-grid";
import pepsi from "./pepsi.jpg";
const Paragraph = styled.p`
  color: ${props => (props.gold ? "gold" : "brown")};
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div``;
const Img = styled.img`
  max-width: 100px;
  animation: ${rotate360} 20s linear infinite;
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
const InputStyled = Input.extend.attrs({
  // we can define static props
  type: "password",
  required: "required",
  placeholder: props => props.placeholder || "Mot de passe",

  // or we can define dynamic ones
  margin: props => props.size || "1em",
  padding: props => props.size || "1em"
})`
  font-size: 1em;
  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
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
        <Rotate>
          <Img src={pepsi} />
        </Rotate>
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
          <InputStyled placeholder="MDP..." />
          <Button>Normal</Button>
          <Button primary>Primary</Button>
          <ButtonWarning help>Warning</ButtonWarning>
        </Wrapper>
      </div>
    );
  }
}

export default withTheme(Home);

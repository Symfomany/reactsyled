import styled from "styled-components";

const Button = styled.button`
  color: white;
  border: 2px solid ${props => props.theme.fg};
  background: palevioletred;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const ButtonOutline = Button.extend`
  background: transparent;
  color: ${props => props.theme.fg};
`;

export { Button, ButtonOutline };

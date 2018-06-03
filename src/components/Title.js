import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * Composant Home
 */
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h3 className={this.props.className}>{this.context.message}</h3>;
  }
}

Title.contextTypes = {
  message: PropTypes.string
};

export default Title;

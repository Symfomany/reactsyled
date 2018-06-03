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
    return (
      <div>
        <h3>{this.context.message}</h3>
      </div>
    );
  }
}

Title.contextTypes = {
  message: PropTypes.string
};

export default Title;

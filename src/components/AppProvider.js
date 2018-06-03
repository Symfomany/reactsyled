import React, { Component, Children } from "react";
import PropTypes from "prop-types";

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getChildContext() {
    return {
      message: this.props.message,
      theme: this.props.theme
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}

AppProvider.childContextTypes = {
  message: PropTypes.string,
  theme: PropTypes.object
};

AppProvider.propTypes = {
  theme: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default AppProvider;

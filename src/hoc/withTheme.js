import React, { Component } from "react";
import PropTypes from "prop-types";

//Hoc: withQQCH()
// HOC: Hight Order Component
const withTheme = ComponentToWrap => {
  return class extends Component {
    static contextTypes = {
      theme: PropTypes.object.isRequired
    };
    render() {
      const { theme } = this.context;
      return <ComponentToWrap {...this.props} theme={theme} />;
    }
  };
};
export default withTheme;

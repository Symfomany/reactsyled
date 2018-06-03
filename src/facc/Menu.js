import React from "react";

/**
 * Facc: Function as child components
 * @param {*} param0
 */
const Menu = ({ children, ...props }) => {
  return <ul {...props}>{children}</ul>;
};

export default Menu;

import React from "react";

/**
 * Facc: Fonction qui prends en paramètre les enfants
 */
function Header({ children, ...props }) {
  return <nav {...props}>{children}</nav>;
}

export default Menu;

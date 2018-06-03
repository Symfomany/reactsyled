import React from "react";
import ReactDOM from "react-dom";
import AppProvider from "./components/AppProvider";
import App from "./components/App";
import Main from "./components/Main";

import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import theme from "./theme";
import { ThemeProvider } from "styled-components";

/*
  import { injectLayoutBaseCSS } from "styled-bootstrap-grid";
  injectLayoutBaseCSS();
*/
// Main Render
ReactDOM.render(
  <AppProvider theme={theme} message="Je suis dans le context" store={store}>
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </AppProvider>,
  document.getElementById("root")
);
registerServiceWorker();

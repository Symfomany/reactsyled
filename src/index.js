import React from "react";
import ReactDOM from "react-dom";

import AppProvider from "./components/AppProvider";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import theme from "./theme";

// Main Render
ReactDOM.render(
  <AppProvider theme={theme} message="Je suis dans le context" store={store}>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
registerServiceWorker();

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import store from "src/state/store";

import RouteManager from "./RouteManager";

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <RouteManager />
      </BrowserRouter>
    </Provider>
  </React.Fragment>
);

export default App;

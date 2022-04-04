import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "./Layout";
import RouteManager from "./RouteManager";

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
      <Layout>
        <RouteManager />
      </Layout>
    </BrowserRouter>
  </React.Fragment>
);

export default App;

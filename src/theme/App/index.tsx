import React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import RouteManager from "./RouteManager";

const App = () => (
  <BrowserRouter>
    <Layout>
      <RouteManager />
    </Layout>
  </BrowserRouter>

);

export default App;

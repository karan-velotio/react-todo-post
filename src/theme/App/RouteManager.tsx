import React from "react";
import { Route, Routes } from "react-router-dom";

import User from "src/theme/User";
import Todo from "src/theme/Todo";
import Layout from "src/theme/App/Layout";
import Posts from "src/theme/Posts";

const RouteManager = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<User />} />
      <Route path="/user">
        <Route index element={<User />} />
        <Route path=":id/posts" element={<Posts />} />
        <Route path=":id/todos" element={<Todo />} />
      </Route>
    </Route>
  </Routes>
);

export default RouteManager;

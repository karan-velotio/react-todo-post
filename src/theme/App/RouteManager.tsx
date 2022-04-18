import React from "react";
import { Routes, Route } from "react-router-dom";
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
        <Route path=":id" element={<Posts />} />
      </Route>
      <Route path="/todo" element={<Todo />} />
    </Route>
  </Routes>
);

export default RouteManager;

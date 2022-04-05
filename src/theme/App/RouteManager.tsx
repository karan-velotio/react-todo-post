import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "src/theme/User";
import Todo from "src/theme/Todo";

const RouteManager = () => (
  <Routes>
    <Route path="/" element={<User />} />
    <Route path="/user" element={<User />} />
    <Route path="/todo" element={<Todo />} />
  </Routes>
);

export default RouteManager;

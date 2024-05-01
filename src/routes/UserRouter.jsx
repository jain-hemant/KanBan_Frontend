import React from "react";
import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/user/Register";
import { Login } from "../pages/user/Login";
export const UserRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user/register" element={<Register />} />
      <Route path="/user/login" element={<Login />} />
    </Routes>
  );
};

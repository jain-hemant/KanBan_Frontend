import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserRouter } from "./UserRouter";
import { KanbanRouter } from "./KanbanRouter";
export const AppRouter = () => {
  return (
    <>
      <UserRouter />
      <KanbanRouter />
    </>
  );
};

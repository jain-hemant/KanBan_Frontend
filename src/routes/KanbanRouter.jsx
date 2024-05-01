import React from "react";
import { Route, Routes } from "react-router-dom";
import { KanbanCreate } from "../pages/kanban/KanbanCreate";
import { KanbanView } from "../pages/kanban/KanbanView";
import { KanbanUpdate } from "../pages/kanban/KanbanUpdate";

export const KanbanRouter = () => {
  return (
    <Routes>
      <Route path="/kanban/create" element={<KanbanCreate />} />
      <Route path="/kanban/view" element={<KanbanView />} />
      <Route path="/kanban/update" element={<KanbanUpdate />} />
    </Routes>
  );
};

import React from "react";
import Home from "../Components/Home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Task from "../Components/Task";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/add-new" element={<Task />} />
          <Route
            path="*"
            element={<Home />}
            exact
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;

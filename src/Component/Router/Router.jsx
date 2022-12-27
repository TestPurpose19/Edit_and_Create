import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Get from "../Get/Get";
import Add from "../Add&Edit/Add&Edit";

const RouterComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Get />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterComponent;

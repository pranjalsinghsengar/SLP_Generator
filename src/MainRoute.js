import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./Main";

const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' Component={Login} />
      <Route path='/main' Component={Main} />
    </Routes>
  );
};

export default MainRoute;

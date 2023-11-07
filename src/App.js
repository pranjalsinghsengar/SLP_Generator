import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Main from "./Main";
import { useState } from "react";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return <BrowserRouter>{isLogin ? <Main /> : <Login setIsLogin={setIsLogin} />}</BrowserRouter>;
};

export default App;

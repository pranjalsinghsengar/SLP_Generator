import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Main from "./Main";
import MainRoute from "./MainRoute";

const App = () => {
  return (
    <BrowserRouter>
     {/* <MainRoute/> */}
     <Main/>
    </BrowserRouter>
  );
};

export default App;

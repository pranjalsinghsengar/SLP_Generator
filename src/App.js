import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Router from "./Router";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import Header from "./pages/Header";
import SideMenu from "./pages/SideMenu";
import Context, { AppContext } from "./Context";
import Payrolls from "./pages/Payrolls";
import { useContext, useState } from "react";
import { OpenCardMainContainer } from "./components/Global";
const App = () => {
  const { GoDashboard } = useContext(AppContext);

  return (
    <BrowserRouter>
      <div className='w-screen h-screen '>
        <div style={{ height: "7%" }}>
          <Header />
        </div>
        <div className='relative h-full' style={{ height: "90%" }}>
          <Dashboard />
          {!GoDashboard && (
            <div className='w-full h-full backdrop-blur-lg flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 '>
              <OpenCardMainContainer className=' w-4/5 h-4/5 bg-white rounded-2xl overflow-hidden shadow-2xl'>
                {/* <SideMenu />
            <Router /> */}
                {/* <Payrolls />
            <Employee /> */}
                <Router />
              </OpenCardMainContainer>
            </div>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

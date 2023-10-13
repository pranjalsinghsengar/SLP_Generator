import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Router";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import Header from "./pages/Header";
import SideMenu from "./pages/SideMenu";
import Context from "./Context/Context";
import Payrolls from "./pages/Payrolls";
function App() {
  return (
    <Context>
      <BrowserRouter>
        <div className='w-screen h-screen'>
          <div style={{ height: "7%" }}>
            <Header />
          </div>
          <div className='flex gap-10 h-full ' style={{ height: "90%" }}>
            {/* <SideMenu />
            <Router /> */}
            {/* <Payrolls />
            <Employee /> */}
            <Dashboard/>
          </div>
        </div>
      </BrowserRouter>
    </Context>
  );
}

export default App;

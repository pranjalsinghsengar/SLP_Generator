import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Employee from './pages/Employee'
import CreateEmployee from './pages/Create/CreateEmployee'
import CreatePayrolls from './pages/Create/CreatePayrolls'
import Payrolls from './pages/Payrolls'
import Dashboard from './pages/Dashboard'
import CreateDepartment from './pages/Create/CreateDepartment'
// import PdfMaker from './pages/Pdf/PdfMaker'
import PaySlip from './pages/PaySlip'
import CreatePositions from './pages/Create/CreatePositions'
import ManagePDF from './pages/ManagePDF'

const Router = () => {
  return (
  <Routes >
    {/* <Route path="/" element={<Dashboard/>} /> */}
    <Route path="/Employee" element={<Employee/>} />
    <Route path="/Payrolls" element={<Payrolls/>} />
    <Route path="/CreateEmployee" element={<CreateEmployee/>} />
    <Route path="/CreatePayrolls" element={<CreatePayrolls/>} />
    <Route path="/CreateDepartment" element={<CreateDepartment/>} />
    <Route path="/CreatePositions" element={<CreatePositions/>} />
    <Route path="/PaySlip" element={<PaySlip/>} />
    <Route path="/ManagePDF" element={<ManagePDF/>} />
    {/* <Route path="/PaySlip" element={<PaySlip/>} /> */}


  </Routes>
  )
}

export default Router
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Employee from './pages/Employee'
import CreateEmployee from './pages/Create/CreateEmployee'
import CreatePayrolls from './pages/Create/CreatePayrolls'
import Payrolls from './pages/Payrolls'
import Dashboard from './pages/Dashboard'

const Router = () => {
  return (
  <Routes>
    {/* <Route path="/" element={<Dashboard/>} /> */}
    <Route path="/Employee" element={<Employee/>} />
    <Route path="/Payrolls" element={<Payrolls/>} />
    <Route path="/CreateEmployee" element={<CreateEmployee/>} />
    <Route path="/CreatePayrolls" element={<CreatePayrolls/>} />

  </Routes>
  )
}

export default Router
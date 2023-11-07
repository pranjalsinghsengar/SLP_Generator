import React, { useContext, useState } from "react";
import { AppContext } from "../Context";
import Card from "../components/Card";
import styled from "styled-components";
import DashCard from "../components/DashCard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { EmployeeList, PayrollsList, departments, setGoDashboard ,Positions} =
    useContext(AppContext);
  const departmentCount = departments.length;
  const employeeCount = EmployeeList.length;
  const PayrollsCount = PayrollsList.length;
  const PositionsCount = Positions.length
  const activeEmployeeCount = EmployeeList.filter(
    (employee) => employee.status === "Active"
  ).length;
  const nonActiveEmployeeCount = EmployeeList.filter(
    (employee) => employee.status === "Inactive"
  ).length;

  const CreateEmployeeHandler = () => {
    navigate("/CreateEmployee");
    setGoDashboard(false);
  };
  const CreatePayrollsHandler = () => {
    navigate("/CreatePayrolls");
    setGoDashboard(false);
  };
  const CreateDipartmentHandler = () => {
    navigate("/CreateDepartment");
    setGoDashboard(false);
  };
  return (
    <div className='w-full flex flex-col items-center gap-24'>
      <div className='w-10/12'>
        <h1 className='text-7xl font-bold mt-6'>DASHBOARD</h1>
      </div>
      <div className='flex flex-wrap gap-10'>
        <DashCard
          title='Employees'
          TotalCount={employeeCount}
          GreenText={activeEmployeeCount}
          RedText={nonActiveEmployeeCount}
          OpenList={() => {
            navigate("/Employee");
            setGoDashboard(false);
          }}
          CreateNew={CreateEmployeeHandler}
        />
        <DashCard
          title='Payrolls'
          TotalCount='12'
          GreenText={employeeCount}
          RedText={PayrollsCount}
          OpenList={() => {
            navigate("/Payrolls");
            setGoDashboard(false);
          }}
          CreateNew={CreatePayrollsHandler}
        />
        <DashCard
          title='Positions'
          GreenText={PositionsCount}
          // OpenList={{}}
          CreateNew={() => {
            navigate("/CreatePositions");
            setGoDashboard(false);
          }}
        />
        <DashCard
          title='Department'
          GreenText={departmentCount}
          // OpenList={{}}
          CreateNew_ClassName='h-12 pb-2'
          CreateNew={CreateDipartmentHandler}
        />
      </div>
    </div>
  );
};

export default Dashboard;

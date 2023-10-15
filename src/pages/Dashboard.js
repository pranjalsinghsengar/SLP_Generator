import React, { useContext, useState } from "react";
import { AppContext } from "../Context";
import Card from "../components/Card";
import styled from "styled-components";
import DashCard from "../components/DashCard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { setGoDashboard } = useContext(AppContext);

  const CreateEmployeeHandler = () => {
    navigate("/CreateEmployee");
    setGoDashboard(false);
  };
  const CreatePayrollsHandler = () => {
    navigate("/CreatePayrolls");
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
          TotalCount='12'
          GreenText={"45"}
          RedText={"10"}
          OpenList={() => {
            navigate("/Employee");
            setGoDashboard(false);
          }}
          CreateNew={CreateEmployeeHandler}
        />
        <DashCard
          title='Payrolls'
          TotalCount='12'
          GreenText={"45"}
          RedText={"10"}
          OpenList={{}}
          CreateNew={CreatePayrollsHandler}
        />
        <DashCard
          title='Positions'
          GreenText={"45"}
          OpenList={{}}
          CreateNew={CreateEmployeeHandler}
        />
        <DashCard
          title='Department'
          GreenText={"45"}
          OpenList={{}}
          CreateNew={CreateEmployeeHandler}
        />
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { useNavigate } from "react-router-dom";
import Create from "../components/Create";

const Employee = () => {
  const navigate = useNavigate();
  const CreateEmp = () => {
    navigate("/CreateEmployee");
  };
  return (
    <div>
      Employee
     <Create onCreate={CreateEmp} />
    </div>
  );
};

export default Employee;

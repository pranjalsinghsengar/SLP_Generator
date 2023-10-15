import React, { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export const AppContext = createContext();

const Context = ({ children }) => {
  const unique_id = uuid().slice(0, 8);
  const [GoDashboard, setGoDashboard] = useState(true);
  const [isActive, setIsActive] = useState("Inactive");

  const [EmployeeList, setEmployeeList] = useState([]);
  const [PayrollsList, setPayrollsList] = useState([]);

  const [formData, setFormData] = useState({
    EmployeeId: null,
    status: "",
    firstName: "",
    lastName: "",
    gender: "",
    uan: "",
    email: "",
    department: "",
    designation: "",
    dateOfJoining: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
  });
  const [PayrollsData, setPayrollsData] = useState({
    EmployeeId: "",
    Year: "",
    Month: "",
    Type: "",
  });
  useEffect(() => {
    console.log("EmployeeList ", EmployeeList);
    console.log("PayrollsList ", PayrollsList);
  });

  return (
    <AppContext.Provider
      value={{
        unique_id,
        EmployeeList,
        setEmployeeList,
        formData,
        setFormData,
        GoDashboard,
        setGoDashboard,
        PayrollsData,
        setPayrollsData,
        PayrollsList,
        setPayrollsList,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;

import React, { createContext, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

export const AppContext = createContext();

const Context = ({ children }) => {
  const unique_id = uuid().slice(0, 8);
  const [GoDashboard, setGoDashboard] = useState(true);
  const [isActive, setIsActive] = useState("Inactive");
  const [isFound, setIsFound] = useState()
  const [selectedEmployee, setselectedEmployee] = useState();

  const [EmployeeList, setEmployeeList] = useState([]);
  const [PayrollsList, setPayrollsList] = useState([]);

  const [formData, setFormData] = useState({
    EmployeeId: null,
    status: "Inactive" ,
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
  const [departments, setDepartments] = useState([]);



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
        setIsActive,isFound,
        setIsFound,departments,setDepartments,selectedEmployee, setselectedEmployee
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;

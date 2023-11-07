import React, { createContext, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

export const AppContext = createContext();

const Context = ({ children }) => {
  const unique_id = uuid().slice(0, 8);
  const [GoDashboard, setGoDashboard] = useState(true);
  const [isActive, setIsActive] = useState("Inactive");
  const [isFound, setIsFound] = useState();
  const [selectedEmployee, setselectedEmployee] = useState();

  const [EmployeeList, setEmployeeList] = useState([]);
  const [employeeIDList, setEmployeeIDList] = useState([]);
  const [PayrollsList, setPayrollsList] = useState([]);

  const [formData, setFormData] = useState({
    EmployeeId: null,
    status: "Inactive",
    firstName: "",
    lastName: "",
    gender: "",
    uan: "",
    email: "",
    department: "",
    position: "",
    dateOfJoining: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    pdfHistory: "",
  });
  const [PayrollsData, setPayrollsData] = useState({
    EmployeeId: "",
    Year: "",
    Month: "",
    Type: "",
  });
  const [departments, setDepartments] = useState([]);
  const [Positions, setPositions] = useState([]);
  const [SlipList, setSlipList] = useState([]);

  useEffect(() => {
    const updatedEmployeeIDList = EmployeeList.map((employee) => ({
      employeeID: employee.EmployeeId,
      name: employee.firstName + " " + employee.lastName,
    }));
    setEmployeeIDList(updatedEmployeeIDList);
    console.log("EmployeeList", updatedEmployeeIDList);
    // ====================================================================
    // ====================================================================
    // ====================================================================
    EmployeeList.forEach((employee) => {
      // Find the corresponding employee in PayrollsList
      const existingPayroll = PayrollsList.find(
        (payroll) => payroll.employeeID === employee.employeeID
      );

      // If the employee exists in PayrollsList, update its data
      if (existingPayroll) {
        const updatedEmployeeList = PayrollsList.map((payroll) => {
          // if (payroll.EmployeeId === employee.EmployeeId) {
          return {
            ...payroll,
            status: employee.status,
          };
          // }
        });

        setPayrollsList(updatedEmployeeList);
        console.log("PayrollsList",updatedEmployeeList)
      }
    });
  }, [EmployeeList]);
  console.log(PayrollsList, PayrollsList);
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
        isFound,
        setIsFound,
        departments,
        setDepartments,
        selectedEmployee,
        setselectedEmployee,
        Positions,
        setPositions,
        SlipList,
        setSlipList,
        employeeIDList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;

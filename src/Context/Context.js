import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const AppContext = createContext();

const Context = ({ children }) => {
  const unique_id = uuid().slice(0, 8);
  const [EmployeeList, setEmployeeList] = useState([]);

  const [formData, setFormData] = useState({
    EmployeeId: null,
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
  return (
    <AppContext.Provider value={{unique_id,EmployeeList, setEmployeeList, formData, setFormData }}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;

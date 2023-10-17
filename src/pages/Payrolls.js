import React, { useContext, useState } from "react";
import Create from "../components/Create";
import { useNavigate } from "react-router-dom";
import HeaderCreate from "../components/HeaderCreate";
import { AppContext } from "../Context";
import { TD } from "../components/Global";

const Payrolls = () => {
  const navigate = useNavigate();
  const [selectedEmployee, setselectedEmployee] = useState(null);

  const {
    // EmployeeList,
    PayrollsData,
    setPayrollsData,
    PayrollsList,
    setPayrollsList,
  } = useContext(AppContext);
  const showDetails = (data) => {
    setselectedEmployee(data);
    console.log(selectedEmployee);
  };

  return (
    <>
     <HeaderCreate
        title='Payrolls List'
        BTNtitle='Add Payroll'
        onBtnClick={() => navigate("/CreatePayrolls")}
        className='border-b pb-5'
      />
        <div className='w-full flex justify-between gap-10'>
        <table className={`h-fit ${selectedEmployee ? "w-3/4" : "w-full"}`}>
          <thead>
            <tr className='border-b '>
              <th>Employee ID</th>
              <th>Status</th>
              <th>First Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Show</th>
            </tr>
          </thead>
          <tbody className='text-center '>
            {PayrollsList.map((data, index) => (
              <tr key={index} className=' h-14 border-b '>
                <TD>{data.EmployeeId}</TD>
                <TD
                  className={`${
                    data.status === "Active" ? "text-green-800" : "text-red-500"
                  }`}
                >
                  {data.status}
                </TD>
                <TD>{data.firstName}</TD>
                <TD>{data.gender}</TD>
                <TD>{data.email}</TD>
                <Create
                  BTNtitle='Details'
                  onBtnClick={() => showDetails(data)}
                  className=''
                />
              </tr>
            ))}
          </tbody>
        </table>
       
      </div>
    </>
  );
};

export default Payrolls;

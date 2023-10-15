import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Create from "../components/Create";
import HeaderCreate from "../components/HeaderCreate";
import { AppContext } from "../Context";
import styled from "styled-components";

const TD = styled.td`
  /* padding: 1rem 0; */
`;
const SpanDetail = styled.span`
  font-weight: 500;
`;
const Employee = () => {
  const navigate = useNavigate();
  // const CreateEmp = () => {
  //   navigate("/CreateEmployee");
  // };
  const { EmployeeList } = useContext(AppContext);
  const [selectedEmployee, setselectedEmployee] = useState(null);

  const showDetails = (data) => {
    setselectedEmployee(data);
    console.log(selectedEmployee);
  };

  return (
    <>
      <HeaderCreate
        title='Employees List'
        BTNtitle='Add Employee'
        onBtnClick={() => navigate("/CreateEmployee")}
        className='border-b pb-5'
      />
      <div className='w-full flex justify-between'>
        <table className='w-3/5'>
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
          <tbody className='text-center'>
            {EmployeeList.map((data, index) => (
              <tr key={index} className='border-b '>
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
                  className={" text-green-800 "}
                />
              </tr>
            ))}
          </tbody>
        </table>
        {selectedEmployee && (
          <div className='shadow-lg w-1/3 p-5 h-full rounded-2xl text-lg'>
            <div className='font-semibold text-2xl flex justify-between'>
              Personal Details{" "}
              <p
                className={`${
                  selectedEmployee.status === "Active"
                    ? "text-green-800"
                    : "text-red-500"
                }`}
              >
                {selectedEmployee.EmployeeId}
              </p>
            </div>

            <div className='mt-5'>
              <p
                className={`${
                  selectedEmployee.status === "Active"
                    ? "text-green-800"
                    : "text-red-500"
                }`}
              >
                {" "}
                <SpanDetail className='text-black'>Status : </SpanDetail>
                {selectedEmployee.status}
              </p>
              <p>
                <SpanDetail> Full Name : </SpanDetail>{" "}
                {selectedEmployee.firstName} {selectedEmployee.lastName}{" "}
              </p>
              <p>
                <SpanDetail>Gender : </SpanDetail>
                {selectedEmployee.gender}
              </p>
              <p>
                <SpanDetail>Email : </SpanDetail>
                {selectedEmployee.email}
              </p>
              {/*  */}
              <p className='font-semibold text-2xl border-b border-t py-2'>
                Bank Details
              </p>
              <p>
                <SpanDetail>Bank Name :</SpanDetail>
                {selectedEmployee.bankName}
              </p>
              <p>
                <SpanDetail>Account Number : </SpanDetail>
                {selectedEmployee.accountNumber}
              </p>
              <p>
                <SpanDetail>IFSC Code </SpanDetail>
                {selectedEmployee.ifscCode}
              </p>
              <p className='font-semibold text-2xl border-b border-t py-2'>
                Bank Details
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Employee;

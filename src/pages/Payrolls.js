import React, { useContext, useState } from "react";
import Create from "../components/Create";
import { useNavigate } from "react-router-dom";
import HeaderCreate from "../components/HeaderCreate";
import { AppContext } from "../Context";
import { Option_Text, SpanDetail, TD } from "../components/Global";

const Payrolls = () => {
  const navigate = useNavigate();
  const [selectedEmployee, setselectedEmployee] = useState(null);
const OpenEmp_List = () => {
  navigate('/employees')
}


  const {
    // EmployeeList,
    PayrollsData,
    setPayrollsData,
    PayrollsList,
    setPayrollsList,isFound
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
              <th>Email</th>
              <th>Show</th>
            </tr>
          </thead>
          <tbody className='text-center'>
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
        
        {selectedEmployee && (
          <div className='shadow-xl shadow-slate-300 w-2/3 p-5  rounded-2xl text-lg overflow-auto '>
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
            <div className="flex justify-between">
              <div>

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
               <Option_Text> {selectedEmployee.firstName} {selectedEmployee.lastName}{" "}</Option_Text>
              </p>
              <p>
                <SpanDetail>Gender : </SpanDetail>
                <Option_Text>{selectedEmployee.gender}</Option_Text>
              </p>
              <p>
                <SpanDetail>Email : </SpanDetail>
                <Option_Text>{selectedEmployee.email}</Option_Text>
              </p>
</div>
<div className=" p-2">
<p>
                <SpanDetail> Year : </SpanDetail>{" "}
                 <Option_Text>{selectedEmployee.Year}{" "}</Option_Text>
              </p>
              <p>
                <SpanDetail>Month : </SpanDetail>
               <Option_Text> {selectedEmployee.Month}</Option_Text>
              </p>
              <p>
                <SpanDetail>Type : </SpanDetail>
                <Option_Text>{selectedEmployee.Type}</Option_Text>
              </p>
</div>
            </div>

              {/*  */}
              <p className='font-semibold text-2xl border-b border-t py-2 text-center text-gray-500'>
                Bank Details
              </p>
              <p>
                <SpanDetail>Bank Name :</SpanDetail>
                <Option_Text>{selectedEmployee.bankName}</Option_Text>
              </p>
              <p>
                <SpanDetail>Account Number : </SpanDetail>
                <Option_Text>{selectedEmployee.accountNumber}</Option_Text>
              </p>
              <p>
                <SpanDetail>IFSC Code </SpanDetail>
                <Option_Text>{selectedEmployee.ifscCode}</Option_Text>
              </p>
              <p className='font-semibold text-2xl border-b border-t py-2 text-center text-gray-500'>
                Other Details
              </p>
              <p>
                <SpanDetail>Department </SpanDetail>
                <Option_Text>{selectedEmployee.department}</Option_Text>
              </p>
              <p>
                <SpanDetail>Designation </SpanDetail>
               <Option_Text> {selectedEmployee.designation}</Option_Text>
              </p>
              <p>
                <SpanDetail>Date of Joining </SpanDetail>
                <Option_Text>{selectedEmployee.dateOfJoining}</Option_Text>
              </p>
              <p>
                <SpanDetail>UAN </SpanDetail>
                <Option_Text>{selectedEmployee.uan}</Option_Text>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Payrolls;

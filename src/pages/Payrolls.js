import React, { useContext, useState } from "react";
import Create from "../components/Create";
import { useNavigate } from "react-router-dom";
import HeaderCreate from "../components/HeaderCreate";
import { AppContext } from "../Context";
import { Option_Text, SpanDetail, TD } from "../components/Global";

const Payrolls = () => {
  const {
    PayrollsList,selectedEmployee, setselectedEmployee
  } = useContext(AppContext);

  const navigate = useNavigate();
const OpenEmp_List = () => {
  navigate('/employees')
}



  const showDetails = (data) => {
    setselectedEmployee(data);
    // console.log(selectedEmployee);
  };

  const ShowPdfHandler = (data) => {
    // setselectedEmployee(data);
    navigate("/PaySlip" , { state: { data } })
  };

  return (
    <div className="h-screen">
     <HeaderCreate
        title='Payrolls List'
        BTNtitle='Add Payroll'
        onBtnClick={() => navigate("/CreatePayrolls")}
        className='border-b pb-5'
      />
        <div className='w-full h-full flex items-start  justify-between gap-4'>
        <div className={` mt-5 h-full overflow-y-auto ${selectedEmployee ? "w-3/4" : "w-full"}`}>

        <table className="w-full">
          <thead style={{ position: 'sticky', top: 0, background: 'white' }}>
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
                <td>
                <div className="flex justify-center gap-3">


                <Create
                  BTNtitle='Slip'
                  onBtnClick={() => 
                    ShowPdfHandler(data)
                  }
                  className=''
                />
                <Create
                  BTNtitle='Details'
                  onBtnClick={() => showDetails(data)}
                  className=''
                />
                </div>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>        
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
                <SpanDetail>Position </SpanDetail>
               <Option_Text> {selectedEmployee.position}</Option_Text>
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
    </div>
  );
};

export default Payrolls;

import React, { useContext, useEffect, useRef, useState } from "react";
import Input from "../../components/Input";
import HeaderCreate from "../../components/HeaderCreate";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context";
import Create from "../../components/Create";
import { Grey_option, Select } from "../../components/Global";

const CreatePayrolls = () => {
  const {
    EmployeeList,
    PayrollsData,
    setPayrollsData,
    PayrollsList,
    setPayrollsList,
    isFound,
    setIsFound,
    employeeIDList,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const [idexist, setidexist] = useState(false);

  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");

  const handleEmployeeIdChange = (event) => {
    const selectedEmployee = EmployeeList.find(
      (employee) => employee.EmployeeId === event.target.value
    );

    if (selectedEmployee) {
      setIsFound({
        ...isFound,
        type: "found",
        message: "Employee data available",
      });

      setPayrollsData({
        ...PayrollsData,
        EmployeeId: selectedEmployee.EmployeeId,
        status: selectedEmployee.status,
        firstName: selectedEmployee.firstName,
        lastName: selectedEmployee.lastName,
        gender: selectedEmployee.gender,
        uan: selectedEmployee.uan,
        email: selectedEmployee.email,
        department: selectedEmployee.department,
        designation: selectedEmployee.designation,
        dateOfJoining: selectedEmployee.dateOfJoining,
        bankName: selectedEmployee.bankName,
        accountNumber: selectedEmployee.accountNumber,
        ifscCode: selectedEmployee.ifscCode,
        pdfHistorys: [],
      });
    } else {
      setIsFound({
        ...isFound,
        type: "notfound",
        message: `Incorrect ID, Try again or `,
      });

      setPayrollsData({
        EmployeeId: null,
        status: null,
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
        pdfHistorys: [],
      });
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPayrollsData({
      ...PayrollsData,
      [name]: value,
    });
  };

  console.log(PayrollsData, "PayrollsData");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPayrollsList([...PayrollsList, PayrollsData]);
    setPayrollsData((prev) => ({
      ...prev,
      EmployeeId: "",
      Year: "",
      Month: "",
      Type: "",
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
      pdfHistorys: [],

      // pdfHistory:"",
    }));
  };

  console.log("employeeIDList", employeeIDList);
  return (
    <>
      <HeaderCreate
        title='Create Payrolls'
        BTNtitle='Open List'
        onBtnClick={() => navigate("/Payrolls")}
        className='border-b pb-5'
      />
      <div className='justify-center flex h-full'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col w-2/4 justify-center gap-10'
        >
          <div className='w-full flex'>
            <Select
              name='EmployeeId'
              clr={PayrollsData.EmployeeId}
              onChange={handleEmployeeIdChange}
            >
              <Grey_option value=''>Select Employee</Grey_option>
              {employeeIDList.map((item, index) => (
                <Grey_option value={item.employeeID} key={index}>
                  {item.name}
                </Grey_option>
              ))}
            </Select>

            <Input
              type='text'
              name='EmployeeId'
              placeholder='Employee Id'
              value={PayrollsData.EmployeeId}
              onChange={handleEmployeeIdChange}
              className='border-b text-green-600'
            />

            {PayrollsData.EmployeeId && (
              <p
                className={
                  isFound.type === "found" ? "text-green-800" : "text-red-500"
                }
              >
                {isFound.message}
              </p>
            )}
          </div>

          {/* <Input
            type='text'
            name='Year'
            placeholder='Year'
            value={PayrollsList.Month}
            onChange={handleInputChange}
          /> */}
          <div className='flex justify-between'>
            <Select
              name='Month'
              clr={PayrollsData.Month}
              onChange={handleInputChange}
            >
              <Grey_option value=''>Select Month</Grey_option>
              <Grey_option value='January'>January</Grey_option>
              <Grey_option value='February'>February</Grey_option>
              <Grey_option value='March'>March</Grey_option>
              <Grey_option value='April'>April</Grey_option>
              <Grey_option value='May'>May</Grey_option>
              <Grey_option value='June'>June</Grey_option>
              <Grey_option value='July'>July</Grey_option>
              <Grey_option value='August'>August</Grey_option>
              <Grey_option value='September'>September</Grey_option>
              <Grey_option value='October'>October</Grey_option>
              <Grey_option value='November'>November</Grey_option>
              <Grey_option value='December'>December</Grey_option>
            </Select>

            <Select
              name='Year'
              clr={PayrollsData.Year}
              onChange={handleInputChange}

              // required=''
            >
              <Grey_option value=''>Select Year</Grey_option>
              <Grey_option value='2023'>2023</Grey_option>
              <Grey_option value='2022'>2022</Grey_option>
              <Grey_option value='2021'>2021</Grey_option>
              <Grey_option value='2020'>2020</Grey_option>
            </Select>
          </div>
          <Select
            name='Type'
            clr={PayrollsData.Type}
            onChange={handleInputChange}
          >
            <Grey_option value=''>Select Type</Grey_option>

            <Grey_option value='>Monthly'>Monthly</Grey_option>
            <Grey_option value='Semi-Monthly'>Semi-Monthly</Grey_option>
            <Grey_option value='Daily'>Daily</Grey_option>
          </Select>

          {/* <Input
            type='text'
            name='Type'
            placeholder='Type'
            value={PayrollsList.Type}
            onChange={handleInputChange}
          /> */}
          <div className='flex justify-center'>
            <button type='submit' className='mt-10'>
              <Create BTNtitle='Submit' />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePayrolls;

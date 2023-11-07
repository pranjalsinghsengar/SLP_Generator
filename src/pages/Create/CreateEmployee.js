import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context";
import Input from "../../components/Input";
import Create from "../../components/Create";
import {
  Grey_option,
  OpenCardMainContainer,
  Select,
} from "../../components/Global";
import HeaderCreate from "../../components/HeaderCreate";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const H1_Head = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
`;

const CreateEmployee = () => {
  const {
    unique_id,
    formData,
    setFormData,
    EmployeeList,
    setEmployeeList,
    isActive,
    setIsActive,
    departments,
    Positions,
  } = useContext(AppContext);
  const navigate = useNavigate();

  // const [Status, setStatus] = useState("inactive");
  console.log(isActive);
  const toggleActive = () => {
    if (isActive === "Active") {
      setIsActive("Inactive");
    } else {
      setIsActive("Active");
    }
  };
  useEffect(() => {
    setFormData({
      ...formData,
      status: isActive,
    });
  }, [isActive]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      EmployeeId: unique_id,
      // status: isActive,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsActive("Inactive");
    setEmployeeList([...EmployeeList, formData]);
    setFormData((prev) => ({
      ...prev,
      EmployeeId: null,
      status: "Inactive",
      firstName: "",
      lastName: "",
      gender: "",
      uan: "",
      email: "",
      department: "",
      designation: "",
      position: "",
      dateOfJoining: "",
      bankName: "",
      accountNumber: "",
      ifscCode: "",
    }));
    console.log("EmployeeList ", EmployeeList);
  };

  return (
    <>
      <HeaderCreate
        title='Create Employee'
        BTNtitle='Open List'
        onBtnClick={() => navigate("/Employee")}
        className='border-b pb-5'
      />

      <form
        onSubmit={handleSubmit}
        className='overflow-y-auto flex-col flex items-center justify-center '
      >
        <div className='w-3/4'>
          <div>
            <div className='flex items-center gap-10  mb-5'>
              <div
                onClick={toggleActive}
                className={`${
                  isActive === "Active" ? "bg-green-800" : "bg-gray-500"
                } relative flex cursor-pointer  items-center px-2 w-24 h-11  rounded-full`}
              >
                <div
                  // style={toggleActive ? { right: 0 } : { bottom: 0 }}
                  style={{
                    position: "absolute",
                    [isActive === "Active" ? "right" : "left"]: 10,
                  }}
                  className={` w-8 h-8 bg-white rounded-full`}
                ></div>
              </div>
              <p
                className={`text-2xl ${
                  isActive === "Active" ? "text-green-700" : "text-red-500"
                }`}
              >
                {isActive === "Active" ? "Active" : "Non Active"}
              </p>
            </div>
            <div className='flex justify-between flex-wrap  '>
              <Input
                type='text'
                name='firstName'
                placeholder='First Name'
                value={formData.firstName}
                onChange={handleInputChange}
                className={"w-1/5"}
                // style={{width:""}}
              />
              <Input
                type='text'
                name='lastName'
                placeholder='Last Name'
                value={formData.lastName}
                onChange={handleInputChange}
                className={"w-1/5"}
              />
              <Input
                type='text'
                name='gender'
                placeholder='Gender'
                value={formData.gender}
                onChange={handleInputChange}
                className={"w-1/5"}
              />
              <Input
                type='text'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='flex justify-between border-t border-green-700 p-5 mt-5 '>
            <div className='w-1/3 flex flex-col gap-6'>
              <H1_Head className=' border-b mb-2 pb-2'>Bank Details</H1_Head>
              <div className='flex gap-4 flex-wrap'>
                <Input
                  type='text'
                  name='bankName'
                  placeholder='Bank Name'
                  value={formData.bankName}
                  onChange={handleInputChange}
                />
                <Input
                  type='text'
                  name='ifscCode'
                  placeholder='IFSC Code'
                  value={formData.ifscCode}
                  onChange={handleInputChange}
                />
              </div>

              <Input
                type='number'
                name='accountNumber'
                placeholder='Account Number'
                value={formData.accountNumber}
                onChange={handleInputChange}
              />
            </div>

            <div className='w-1/3 flex flex-col gap-4' >
              <H1_Head className=' border-b  mb-2 pb-2'>Other Details</H1_Head>
              <Select
                id=''
                name='department'
                style={{ fontSize: 20 }}
                onChange={handleInputChange}
              >
                <Grey_option> Select Department</Grey_option>
                {departments.map((department, index) => (
                  <option key={index} value={department}>
                    {department}
                  </option>
                ))}
              </Select>
              <div className='flex gap-4 justify-between w-full flex-wrap'>
                <Select
                  id=''
                  name='position'
                  style={{ fontSize: 20 }}
                  onChange={handleInputChange}
                >
                  <Grey_option> Select Positions</Grey_option>
                  {Positions.map((Position, index) => (
                    <option key={index} value={Position}>
                      {Position}
                    </option>
                  ))}
                </Select>

                {/* <Input
          type='text'
          name='designation'
          placeholder='Designation'
          value={formData.designation}
          onChange={handleInputChange}
        /> */}
                <Input
                  type='text'
                  name='dateOfJoining'
                  placeholder='Date Of Joining'
                  value={formData.dateOfJoining}
                  onChange={handleInputChange}
                />
              </div>

              <Input
                type='text'
                name='uan'
                placeholder='UAN'
                value={formData.uan}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Include other input fields similarly */}

          <button type='submit' className={"flex justify-center w-full mt-10"}>
            <Create
              BTNtitle='Submit'
              className={`${
                isActive === "Active"
                  ? "bg-green-700 shadow-green-700"
                  : " bg-red-500 shadow-red-500"
              }`}
            />
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateEmployee;

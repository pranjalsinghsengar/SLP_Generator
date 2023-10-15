import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context";
import Input from "../../components/Input";
import Create from "../../components/Create";
import { OpenCardMainContainer } from "../../components/Global";
import HeaderCreate from "../../components/HeaderCreate";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  const {
    unique_id,
    formData,
    setFormData,
    EmployeeList,
    setEmployeeList,
    isActive,
    setIsActive,
  } = useContext(AppContext);
  const navigate = useNavigate();

  // const [Status, setStatus] = useState("inactive");
  const toggleActive = () => {
    if (isActive === "Active") {
      setIsActive("Inactive");
    } else {
      setIsActive("Active");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      EmployeeId: unique_id,
      status: isActive,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployeeList([...EmployeeList, formData]);
    setFormData((prev) => ({
      ...prev,
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

      <form onSubmit={handleSubmit} className='overflow-y-auto'>
        <div className='flex items-center gap-10'>
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
        <Input
          type='text'
          name='firstName'
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <Input
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <Input
          type='text'
          name='gender'
          placeholder='Gender'
          value={formData.gender}
          onChange={handleInputChange}
        />
        <Input
          type='text'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleInputChange}
        />
        <h1>Bank Detais</h1>
        <Input
          type='text'
          name='bankName'
          placeholder='Bank Name'
          value={formData.bankName}
          onChange={handleInputChange}
        />
        <Input
          type='number'
          name='accountNumber'
          placeholder='Account Number'
          value={formData.accountNumber}
          onChange={handleInputChange}
        />
        <Input
          type='text'
          name='ifscCode'
          placeholder='IFSC Code'
          value={formData.ifscCode}
          onChange={handleInputChange}
        />

        <h1>... Detais</h1>
        <Input
          type='text'
          name='department'
          placeholder='Department'
          value={formData.department}
          onChange={handleInputChange}
        />
        <Input
          type='text'
          name='designation'
          placeholder='Designation'
          value={formData.designation}
          onChange={handleInputChange}
        />
        <Input
          type='text'
          name='dateOfJoining'
          placeholder='Date Of Joining'
          value={formData.dateOfJoining}
          onChange={handleInputChange}
        />
        <Input
          type='text'
          name='uan'
          placeholder='UAN'
          value={formData.uan}
          onChange={handleInputChange}
        />

        {/* Include other input fields similarly */}

        <button
          type='submit'
          className={`${isActive ? " shadow-green-700" : " shadow-red-500"}`}
        >
          <Create
            BTNtitle='Submit'
            className={`${isActive ? " bg-green-700" : " bg-red-500"}`}
          />
        </button>
      </form>
    </>
  );
};

export default CreateEmployee;

import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/Context";
import Input from "../../components/Input";

const CreateEmployee = () => {
  const { unique_id, formData, setFormData, EmployeeList, setEmployeeList } =
    useContext(AppContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      EmployeeId: unique_id,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployeeList([...EmployeeList, formData]);
    setFormData((prev) => ({
      ...prev,
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
    }));
  };

  console.log(EmployeeList);
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        {/* Include other input fields similarly */}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default CreateEmployee;

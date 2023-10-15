import React, { useContext } from "react";
import Input from "../../components/Input";
import HeaderCreate from "../../components/HeaderCreate";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context";
import Create from "../../components/Create";
import { Grey_option, Select } from "../../components/Global";

const CreatePayrolls = () => {
  const { PayrollsData, setPayrollsData, PayrollsList, setPayrollsList } =
    useContext(AppContext);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayrollsData({
      ...PayrollsData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPayrollsList([...PayrollsList, PayrollsData]);
    setPayrollsData((prev) => ({
      ...prev,
      EmployeeId: "",
      Year: "",
      Month: "",
      Type: "",
    }));
    // console.log("PayrollsList ", PayrollsList);
  };

  return (
    <>
      <HeaderCreate
        title='Create Payrolls'
        BTNtitle='Open List'
        onBtnClick={() => navigate("/Payrolls")}
        className='border-b pb-5'

      />
      <div className='justify-center flex h-full'>
        <form onSubmit={handleSubmit} className='flex flex-col w-2/4 justify-center gap-10'>
          <Input
            type='text'
            name='EmployeeId'
            placeholder='Employee Id'
            value={PayrollsList.EmployeeId}
            onChange={handleInputChange}
            className="border-b text-green-600"
          />

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
          <div className="flex justify-center">
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

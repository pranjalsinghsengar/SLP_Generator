import React, { useContext, useState } from "react";
import Input from "../components/Input";
import Create from "../components/Create";
import PdfMaker from "./Pdf/PdfMaker";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { AppContext } from "../Context";

function PayslipApp({data}) {
  const [incomeItems, setIncomeItems] = useState([]);
  const [deductionItems, setDeductionItems] = useState([]);
  const [newdeductionItems, setNewDeductionItems] = useState({
    name: "",
    amount: "",
  });
  const [newincomeItems, setNewincomeItems] = useState({
    name: "",
    amount: "",
  });

  const handleAddIncome = () => {
    setIncomeItems([...incomeItems, newincomeItems]);
    setNewincomeItems({ name: "", amount: "" });
  };

  const handleAddDeduction = () => {
    setDeductionItems([...deductionItems, newdeductionItems]);
    setNewDeductionItems({ name: "", amount: "" });
  };
  // Calculate total adding amount
  const totalAddingAmount = incomeItems.reduce(
    (total, item) => total + parseFloat(item.amount || 0),
    0
  );

  // Calculate total deduction amount
  const totalDeductionAmount = deductionItems.reduce(
    (total, item) => total + parseFloat(item.amount || 0),
    0
  );
  const {
    EmployeeList,
    PayrollsData,
    setPayrollsData,
    PayrollsList,
    setPayrollsList,
    isFound,
    setIsFound,selectedEmployee
  } = useContext(AppContext);

  // Calculate net amount
  const netAmount = totalAddingAmount - totalDeductionAmount;
  return (
    <div className=''>
      <div className=' md:flex justify-center items-center gap-10'>
        <div className='shadow-xl p-5 rounded-xl flex justify-center items-center gap-7 '>
          <div className='gap-20 flex justify-between'>
            <Input
              className={"w-52 border-b  border-green-800 "}
              type='text '
              style={{ fontSize: 20 }}
              placeholder='Name Jo bhi hai'
              value={newincomeItems.name}
              onChange={(e) =>
                setNewincomeItems({ ...newincomeItems, name: e.target.value })
              }
            />
            <Input
              className={"w-52 border-b  border-green-800"}
              type='number'
              style={{ fontSize: 20 }}
              placeholder='Amount'
              value={newincomeItems.amount}
              onChange={(e) =>
                setNewincomeItems({ ...newincomeItems, amount: e.target.value })
              }
            />
          </div>
          <Create
            className={"text-4xl"}
            style={{ padding: "1px 15px 5px" }}
            BTNtitle={"+"}
            onBtnClick={handleAddIncome}
          />
        </div>
        <div className='shadow-xl p-5 rounded-xl flex justify-center  items-center gap-7 '>
          <div className='gap-20 flex justify-between '>
            <Input
              style={{ fontSize: 20 }}
              className={"w-52 text-sm border-b  border-red-800  text-red-500"}
              type='text'
              placeholder='Name Jo bhi hai'
              value={newdeductionItems.name}
              onChange={(e) =>
                setNewDeductionItems({
                  ...newdeductionItems,
                  name: e.target.value,
                })
              }
            />
            <Input
              style={{ fontSize: 20 }}
              className={"w-52 border-b  border-red-800 text-red-500"}
              type='number'
              placeholder='Amount'
              value={newdeductionItems.amount}
              onChange={(e) =>
                setNewDeductionItems({
                  ...newdeductionItems,
                  amount: e.target.value,
                })
              }
            />
          </div>
          <Create
            className={"text-4xl bg-red-500"}
            style={{ padding: "1px 15px 5px" }}
            BTNtitle={"+"}
            onBtnClick={handleAddDeduction}
          />
        </div>
        {/* <button onClick={handleAddIncome}>Add Income</button> */}

        {/* <button onClick={handleAddDeduction}>Add Deduction</button> */}
      </div>
      <div className='flex justify-between p-10'>
        <div className='w-1/3'>
          <div className=' flex justify-between  border-b pb-2'>
            <h2 className='text-xl text-black'>Name</h2>
            <h2 className='text-xl text-green-500'>Amount</h2>
          </div>
          {incomeItems.map((item, index) => (
            <div key={index} className='flex justify-between'>
              <h2>{item.name}</h2>
              <div className='text-green-700'> {item.amount}</div>
            </div>
          ))}
        </div>
        <div className='w-1/3'>
          <div className=' flex justify-between border-b pb-2'>
            <h2 className='text-xl text-black'>Name</h2>
            <h2 className='text-xl text-red-500'>Amount</h2>
          </div>

          {deductionItems.map((item, index) => (
            <div key={index} className='flex justify-between'>
              <h2>{item.name}</h2>
              <div className='text-red-500'> {item.amount}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className=' text-center'>
          <p>Total Allowances</p> <p> {totalAddingAmount}</p>
        </div>
        <div className=' text-center'>
          <p>Total Deduction</p> <p> {totalDeductionAmount}</p>
        </div>
        <div className=' text-center'>
          <p>Net Amount</p> <p> {netAmount}</p>
        </div>
      </div>

        <PDFDownloadLink
          document={
            <PdfMaker
              deductionItems={deductionItems}
              incomeItems={incomeItems}
              totalAddingAmount={totalAddingAmount}
              totalDeductionAmount={totalDeductionAmount}
              netAmount={netAmount}
              employee={data}
            />
          }
          fileName='employee_pay.pdf'
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink>
    </div>
  );
}

export default PayslipApp;

import React, { useContext, useEffect, useState } from "react";
import PdfMaker from "./Pdf/PdfMaker";
import { PDFDownloadLink, PDFViewer, View } from "@react-pdf/renderer";
import { useLocation } from "react-router-dom";
import Input from "../components/Input";
import { saveAs } from "file-saver";
import { AppContext } from "../Context";
import Create from "../components/Create";
import PayslipApp from "./PayslipApp";

const PaySlip = () => {
  const {
    EmployeeList,
    PayrollsData,
    setPayrollsData,
    PayrollsList,
    setPayrollsList,
    isFound,
    setIsFound,
  } = useContext(AppContext);

  const [sallerydata, setSallerydata] = useState({
    EmployeeId: null,
    BasicSalary: "",
    HRA: "",
    conveyance: "",
    medical: "",
    special: "",
    deductions: "",
    NetAmount: "",
  });

  const [pdfHistory, setPdfHistory] = useState(null);

  const location = useLocation();
  const { data } = location.state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSallerydata((prevData) => ({
      ...prevData,
      EmployeeId: data.EmployeeId,
      [name]: value,
    }));
  };
  const [showPdf, setshowPdf] = useState("");

  // useEffect(() => {
  //   if (data && pdfHistory !== null) {
  //     setPayrollsList((prevList) =>
  //       prevList.map((employee) => {
  //         if (employee.EmployeeId === data.EmployeeId) {
  //           // Check if employee.pdfHistorys is an array or initialize it as an empty array
  //           const updatedPdfHistorys = Array.isArray(employee.pdfHistorys)
  //             ? [...employee.pdfHistorys, pdfHistory]
  //             : [pdfHistory];
  //           employee.pdfHistorys = updatedPdfHistorys;
  //         }
  //         return employee;
  //       })
  //     );
  //   }
  //   setPdfHistory(null);
  // }, [pdfHistory, data]);

  const SubmitHandler = () => {
    const payslip = { ...sallerydata };
    setPdfHistory(sallerydata);
    setshowPdf(sallerydata);

    setSallerydata({
      EmployeeId: null,
      BasicSalary: "",
      HRA: "",
      conveyance: "",
      medical: "",
      special: "",
      deductions: "",
      NetAmount: "",
    });
  };

  useEffect(() => {
    const BasicSalary = parseFloat(sallerydata.BasicSalary);
    const HRA = parseFloat(sallerydata.HRA);
    const conveyance = parseFloat(sallerydata.conveyance);
    const medical = parseFloat(sallerydata.medical);
    const special = parseFloat(sallerydata.special);
    const deductions = parseFloat(sallerydata.deductions);

    const netPayment =
      BasicSalary + HRA + conveyance + medical + special - deductions;

    setSallerydata((prevData) => ({
      ...prevData,
      NetAmount: netPayment,
    }));
    console.log("netPayment", netPayment);
  }, [
    sallerydata.BasicSalary,
    sallerydata.HRA,
    sallerydata.conveyance,
    sallerydata.medical,
    sallerydata.special,
    sallerydata.deductions,
  ]);
  console.log("payrollList", PayrollsList);

  console.log("pdfHistory", pdfHistory);

  return (
    <div className=''>
      {/* <PDFViewer width="50%" height="600"> */}
      <div className='flex justify-between '>
        <p className='text-4xl font-semibold'>{data.firstName}</p>
        <p className='text-4xl font-bold text-green-800'>{data.EmployeeId}</p>
      </div>
      <div className='flex justify-between items-center h-full'>
        {/* <div>
          <div>
            <Input
              type='text'
              name='BasicSalary'
              placeholder='Basic salary'
              value={sallerydata.BasicSalary}
              onChange={handleInputChange}
            />
            <Input
              type='text'
              name='HRA'
              placeholder='HRA'
              value={sallerydata.HRA}
              onChange={handleInputChange}
            />
            <Input
              type='text'
              name='conveyance'
              placeholder='conveyance'
              value={sallerydata.conveyance}
              onChange={handleInputChange}
            />
            <Input
              type='text'
              name='medical'
              placeholder='Medical'
              value={sallerydata.medical}
              onChange={handleInputChange}
            />
            <Input
              type='text'
              name='special'
              placeholder='special'
              value={sallerydata.special}
              onChange={handleInputChange}
            />
            <Input
              className={"text-red-500"}
              type='number'
              name='deductions'
              placeholder='Deductions'
              value={sallerydata.deductions}
              onChange={handleInputChange}
            />
            <div className='flex'>
              <Create BTNtitle={"Add"} onBtnClick={SubmitHandler} />
            </div>
          </div>

          <div className='border mt-32 border-green-800 rounded-2xl p-5 m-10 '>
            <table className='w-full'>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic Salary</td>
                  <td className='text-center'>{sallerydata.BasicSalary}</td>
                </tr>
                <tr>
                  <td>HRA</td>
                  <td className='text-center'>{sallerydata.HRA}</td>
                </tr>
                <tr>
                  <td>Conveyance</td>
                  <td className='text-center'>{sallerydata.conveyance}</td>
                </tr>
                <tr>
                  <td>Medical</td>
                  <td className='text-center'>{sallerydata.medical}</td>
                </tr>
                <tr>
                  <td>Special</td>
                  <td className='text-center'>{sallerydata.special}</td>
                </tr>
                <tr>
                  <td className='text-red-500'>Deductions</td>
                  <td className='text-red-500 text-center'>
                    {sallerydata.deductions}
                  </td>
                </tr>

                <tr>
                  <td className='font-bold'>Net Paisa</td>
                  <td className=' text-center font-bold '>
                    {sallerydata.NetAmount}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}

        <PayslipApp />

        

        {showPdf && <PDFViewer width={1000} height={600}></PDFViewer>}
      </div>
    </div>
  );
};

export default PaySlip;

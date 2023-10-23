import React from 'react'
import PdfMaker from './Pdf/PdfMaker'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { useLocation } from 'react-router-dom';

const PaySlip = () => {
  const location = useLocation();
  const { data } = location.state;
  console.log(data)
  return (
    <div className='flex justify-between items-center'>
     <PDFViewer width="50%" height="600">

      <PdfMaker selectedEmployee={data} />
     </PDFViewer>
      <div>

        <PDFDownloadLink document={<PdfMaker selectedEmployee={data}/>} fileName='PaySlip' > 
            Download
        </PDFDownloadLink>
      </div>
    </div>
  )
}

export default PaySlip

import React from "react";
import PdfMaker from "./Pdf/PdfMaker";
import { PDFDownloadLink } from "@react-pdf/renderer";

const ManagePDF = ({ deductionItems }) => {
  return (
    <>
      <PdfMaker deductionItems={deductionItems} />

      <PDFDownloadLink
        document={<PdfMaker deductionItems={deductionItems} />}
        fileName='employee_pay.pdf'
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
    </>
  );
};

export default ManagePDF;

import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontSize: 14,
  },
  page_header: {
    backgroundColor: "#188618",
    width: "100%",
    padding: 3,

    // border: 1,
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // marginBottom: 50,
  },
  page_container: {
    width: "95%",
  },
  section: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    // borderWidth: 1,
    // justifyContent: "space-between",
  },
  title: {
    fontSize: 11,
    // backgroundColor: "bl",
    fontWeight: "bold",
  },
  customText: {
    fontSize: 14,
    marginBottom: 5,
  },
  row: {
    width: "33%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  leftCell: {
    // flex: 1,
    fontWeight: "bold",
    borderRightWidth: 1,
    // borderTopWidth:1,
    borderColor: "black",
    fontSize: 8,
    padding: 2,
    width: "30%",
  },
  rightCell: { 
    flex: 1,
    textAlign: "left",
    width: "80%",
    // borderRightWidth: 1,
    // borderTopWidth:1,
    borderColor: "black",
    padding: 2,
    paddingRight:0,
    fontSize: 8,
  },
  innerSection: {
    display: "flex",
    flexDirection: "row",
    // borderWidth: 1,
    // margin:0,
    // borderBottomWidth: 0,
    // borderRightWidth: 0,
    borderColor: "black",
    width: "100%",
  },
  paymentSection: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    height: "32vh",
  },
  Earningdata: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 5,
  },
});

const PdfMaker = ({
  deductionItems,
  incomeItems,
  totalAddingAmount,
  totalDeductionAmount,
  netAmount,
  employee,
}) => {
  // const employee = {
  //   name: "Aman Kumar",
  //   employeeNo: "00003312",
  //   department: "Electrical - T2",
  //   daysPaid: 30,
  //   uan: "100098490140",
  //   totalEarnings: "99,449.00",
  //   earnings: {
  //     basicPay: "46,929.00",
  //     hra: "23,465.00",
  //     specialAllowance: "23,316.00",
  //     bonus: "3,061.50",
  //   },
  //   company: {
  //     name: "DELHI INTL AIRPORT LTD",
  //     grade: "MDXPK9939A",
  //     pan: "123456789A",
  //     bankName: "STATE BANK OF INDIA",
  //     designation: "Engineer - Electrical",
  //   },
  //   deductions: {
  //     employeePFContribution: "46,929.00",
  //     employeeVPFContribution: "23,465.00",
  //     incomeTax: "23,316.00",
  //     salaryAdvanceRecovery: "4,692.90",
  //     totalDeductions: "98,402.90",
  //   },
  //   miscellaneousDeductions: {
  //     medicalInsurancePremium: "3,061.50",
  //     other: "3,061.50",
  //   },
  //   netPay: "13,546.10",
  // };
  console.log("employee", employee);
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={{ width: "100%" }}>
          <Image
            src={"/vitric-logo.png"}
            style={{
              width: 150,
              marginHorizontal: 10,
              marginVertical: 10,
              marginBottom: 30,
            }}
          />
        </View>

        <View style={styles.page_container}>
          <View style={{ border: 1, width: "100%", padding: 5, fontSize: 12 }}>
            <Text style={[{ border: 0 }]}>
              Name:
              {employee.firstName} {employee.lastName}
            </Text>
          </View>
          <View style={styles.page_header}>
            <Text style={styles.title}>Employee Details</Text>
          </View>

          <View style={styles.section}>
            <View style={styles.innerSection}>
              <View style={styles.row}>
                <Text style={styles.leftCell}>Employee No:</Text>
                <Text style={styles.rightCell}>{employee.EmployeeId}</Text>
              </View>
              <View style={[styles.row, { borderLeftWidth: 1 }]}>
                <Text style={styles.leftCell}>email</Text>
                <Text style={styles.rightCell}>{employee.email}</Text>
              </View>
              <View style={[styles.row, { borderLeftWidth: 1 }]}>
                <Text style={styles.leftCell}>Account Number</Text>
                <Text style={[styles.rightCell, { width: "100%" }]}>
                  {employee.accountNumber}
                </Text>
              </View>
            </View>

            <View style={styles.innerSection}>
              <View style={styles.row}>
                <Text style={styles.leftCell}>Employee No:</Text>
                <Text style={styles.rightCell}>{employee.EmployeeId}</Text>
              </View>
              <View style={[styles.row, { borderLeftWidth: 1 }]}>
                <Text style={styles.leftCell}>Date of Joining:</Text>
                <Text style={styles.rightCell}>{employee.EmployeeId}</Text>
              </View>
              <View style={[styles.row, { borderLeftWidth: 1 }]}>
                <Text style={styles.leftCell}>bankName</Text>
                <Text style={[styles.rightCell, { width: "100%" }]}>
                  {employee.bankName}
                </Text>
              </View>
            </View>

            <View style={styles.innerSection}>
              <View style={styles.row}>
                <Text style={styles.leftCell}>date Of Joining</Text>
                <Text style={styles.rightCell}>{employee.dateOfJoining}</Text>
              </View>
              <View style={[styles.row, { borderLeftWidth: 1 }]}>
                <Text style={styles.leftCell}>department</Text>
                <Text style={styles.rightCell}>{employee.department}</Text>
              </View>
              <View style={[styles.row, { borderLeftWidth: 1 }]}>
                <Text style={styles.leftCell}>Designation</Text>
                <Text style={[styles.rightCell, { width: "100%" }]}>
                  {employee.designation}
                </Text>
              </View>
            </View>

            {/* <View style={styles.row}>
              <Text style={styles.leftCell}>Department:</Text>
              <Text style={styles.rightCell}>{employee.department}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.leftCell}>email:</Text>
              <Text style={styles.rightCell}>{employee.email}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.leftCell}>UAN:</Text>
              <Text style={styles.rightCell}>{employee.uan}</Text>
            </View>
          </View>
          <View style={styles.innerSection}>
            <View style={styles.row}>
              <Text style={styles.leftCell}>Total Earnings:</Text>
              <Text style={styles.rightCell}>{employee.totalEarnings}</Text>
            </View> */}

            {/* <View style={styles.row}>
                <Text style={styles.leftCell}>Basic Pay:</Text>
                <Text style={styles.rightCell}>
                  {employee.earnings.basicPay}
                </Text>
              </View> */}

            {/* <View style={styles.row}>
                <Text style={styles.leftCell}>HRA:</Text>
                <Text style={styles.rightCell}>{employee.earnings.hra}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.leftCell}>Special Allowance:</Text>
                <Text style={styles.rightCell}>
                  {employee.earnings.specialAllowance}
                </Text>
              </View> */}

            {/* <View style={styles.row}>
                <Text style={styles.leftCell}>Bonus:</Text>
                <Text style={styles.rightCell}>{employee.earnings.bonus}</Text>
              </View> */}

            {/* <View style={styles.innerSection}>
              <View style={styles.row}>
                <Text style={styles.leftCell}>Bank Name:</Text>
                <Text style={styles.rightCell}>{employee.bankName}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.leftCell}>Account Number:</Text>
                <Text style={styles.rightCell}>{employee.accountNumber}</Text>
              </View>
            </View> */}
          </View>

          <View style={styles.paymentSection}>
            <View
              style={{
                width: "50%",
                // borderWidth: 1,
                // borderColor: "black",
                position: "relative",
              }}
            >
              <View
                style={{
                  // border: "0 0 1px 0 solid black",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 5,
                  flexDirection: "row",
                  backgroundColor: "#188618",
                }}
              >
                <Text>Earning</Text>
                <Text> Amount</Text>
              </View>
              {incomeItems.map((item, index) => (
                <View style={styles.Earningdata} key={index}>
                  <Text>{item.name}</Text>
                  <Text>{item.amount}</Text>
                </View>
              ))}
              {/* <View style={styles.Earningdata}>
                <Text>Dummy</Text>
                <Text>500</Text>
              </View> */}
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
                  padding: 5,
                  borderTopWidth: 1,
                  borderColor: "black",
                }}
              >
                <Text>Total Earning</Text>
                <Text>{totalAddingAmount}</Text>
              </View>
            </View>

            <View
              style={{
                width: "50%",
                borderLeftWidth: 1,
                borderColor: "black",
                position: "relative",
              }}
            >
              <View
                style={{
                  // border: "1px solid black",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 5,
                  flexDirection: "row",
                  backgroundColor: "#188618",
                }}
              >
                <Text>Deduction</Text>
                <Text> Amount</Text>
              </View>

              {deductionItems.map((item, index) => (
                <View style={styles.Earningdata} key={index}>
                  <Text>{item.name}</Text>
                  <Text>{item.amount}</Text>
                </View>
              ))}
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 5,
                  width: "100%",
                  flexDirection: "row",
                  // border: 1,
                  borderTopWidth: 1,
                  borderColor: "black",
                }}
              >
                <Text>Total Deduction</Text>
                <Text>{totalDeductionAmount}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                border: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "35%",
                padding: 10,
              }}
            >
              <Text>Net Pay(INR)</Text>
              <Text>{netAmount}</Text>
            </View>
          </View>

          {/* <View style={styles.row}>
              <Text style={styles.leftCell}>Employee PF Contribution:</Text>
              <Text style={styles.rightCell}>
                {employee.deductions.employeePFContribution}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.leftCell}>Employee VPF Contribution:</Text>
              <Text style={styles.rightCell}>
                {employee.deductions.employeeVPFContribution}
              </Text>
              </View>
            <View style={styles.row}>
              <Text style={styles.leftCell}>Income Tax:</Text>
              <Text style={styles.rightCell}>
                {employee.deductions.incomeTax}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.leftCell}>Salary Advance Recovery:</Text>
              <Text style={styles.rightCell}>
                {employee.deductions.salaryAdvanceRecovery}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.leftCell}>Total Deductions:</Text>
              <Text style={styles.rightCell}>
                {employee.deductions.totalDeductions}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.leftCell}>Medical Insurance Premium:</Text>
              <Text style={styles.rightCell}>
                {employee.miscellaneousDeductions.medicalInsurancePremium}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.leftCell}>Other:</Text>
              <Text style={styles.rightCell}>
                {employee.miscellaneousDeductions.other}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.leftCell}>Net Pay:</Text>
              <Text style={styles.rightCell}>{employee.netPay}</Text>
            </View> */}
        </View>
      </Page>
    </Document>
  );
};

export default PdfMaker;

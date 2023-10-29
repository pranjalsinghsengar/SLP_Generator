import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  LinearGradient,
  Image,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  main: {
    width: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    width: "100%",
    marginTop: 20,
    display: "flex",
    // justifyContent:"center",
    flexDirection: "column",
    alignItems: "center",
    // flexDirection:"row",
  },

  page_header: {
    color: "green",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  page_container: {
    width: "90%",
    // borderWidth: 4,
    // borderColor: "blue",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  FlexCol: {
    width: "90%",
    // alignItems:"center",
    display: "flex",
    flexDirection: "column",
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 10,
    overflow: "hidden",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 25,
    // backgroundColor: "linear-gradient(green, white)",
    backgroundColor: "green",
    // flexDirection: "row",
    // backgroundColor: "linear-gradient(to right, green, white)",
    fontWeight: "bold",
  },
  customText: {
    fontSize: 14,
    marginBottom: 5,
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // marginHorizontal: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  leftCell: {
    flex: 1,
    fontWeight: "bold",
  },
  rightCell: {
    flex: 1,
    textAlign: "right",
  },
  salleryContainer_Container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
  salleryContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 10,
    padding: 20,
  },
  red: {
    color: "red",
  },
  Text: {
    fontSize: 3,
  },
  result: {
    // borderWidth: 2,
    borderColor: "black",
    // width: '100%',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    // color: "red",
  },
  bolds:{
    fontWeight:'extrabold',
    // fontWeight:800,
    borderBottomWidth:1
    // fontSize:90
  }
});

// Create Document Component
const PdfMaker = ({ selectedEmployee, pay }) => {
  console.log("pay.NetAmount", pay.NetAmount);
  console.log("pay.medical", pay.medical);
  return (
    <Document style={styles.main}>
      <Page size='A4' style={styles.page}>
        {/*  */}
        {/* <Text style={styles.title}>Employee Details</Text> */}
        <View style={styles.page_header}>
          <Image src={"/vitric-logo.png"} style={{ width: 250 }} />
          <Text>{selectedEmployee.EmployeeId}</Text>
        </View>
        <View style={styles.page_container}>
          <View></View>
          <View style={styles.flexContainer}>
            <Text>Full Name : </Text>{" "}
            <Text>
              {" "}
              {selectedEmployee.firstName} {selectedEmployee.lastName}{" "}
            </Text>
          </View>

          <View style={styles.flexContainer}>
            <Text>Gender : </Text>
            <Text>{selectedEmployee.gender}</Text>
          </View>

          {/* <View style={styles.flexContainer}> */}
          <View style={styles.flexContainer}>
            <Text>Department: </Text>
            <Text>{selectedEmployee.department}</Text>
          </View>
          <View style={styles.flexContainer}>
            <Text>Position: </Text>
            <Text>{selectedEmployee.position}</Text>
          </View>
          <View style={styles.flexContainer}>
            <Text>Designation: </Text>
            <Text> {selectedEmployee.designation}</Text>
          </View>
          {/* </View> */}

          <View style={styles.flexContainer}>
            <View style={styles.flexContainer}>
              <Text>Email : </Text>
              <Text>{selectedEmployee.email}</Text>
            </View>
          </View>

          {/*  */}
          <View style={styles.salleryContainer_Container}>
            <View style={styles.FlexCol}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  backgroundColor: "green",
                  color: "white",
                  paddingLeft: 10,
                  paddingVertical: 2,
                }}
              >
                Joining Details
              </Text>
              <View
                style={{
                  width: "100%",
                  padding: 10,
                  paddingVertical: 15,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <View style={styles.flexContainer}>
                  <View style={styles.flexContainer}>
                    <Text style={styles.bolds} >Date: </Text>
                    <Text>{selectedEmployee.dateOfJoining}</Text>
                  </View>
                  <View style={styles.flexContainer}>
                    <Text style={styles.bolds}>Year: </Text> <Text>{selectedEmployee.Year} </Text>
                  </View>
                  <View style={styles.flexContainer}>
                    <Text style={styles.bolds}>Month: </Text>
                    <Text>{selectedEmployee.Month}</Text>
                  </View>
                  <View style={styles.flexContainer}>
                    <Text style={styles.bolds}>Type: </Text>
                    <Text>{selectedEmployee.Type}</Text>
                  </View>
                </View>
                <View style={styles.flexContainer}>
                  <Text style={{ marginVertical: 5 }}>UAN </Text>
                  <Text>{selectedEmployee.uan}</Text>
                </View>
              </View>

              {/* <View style={styles.flexContainer}>
              <Text>Date of Joining </Text>
              <Text>{selectedEmployee.dateOfJoining}</Text>
            </View> */}
            </View>

            {/* <View style={styles.salleryContainer_Container}> */}
            <View style={styles.salleryContainer}>
              <View style={{ borderBottomWidth: 3, borderColor: "green" }}>
                <View style={styles.row}>
                  <Text style={styles.leftCell}></Text>
                  <Text style={styles.rightCell}>Amount</Text>
                </View>
              </View>
              <View style={styles.row}>
                <Text style={styles.leftCell}>Basic Salary </Text>
                {pay.BasicSalary && (
                  <Text style={styles.rightCell}> {pay.BasicSalary}</Text>
                )}
              </View>
              <View style={styles.row}>
                <Text style={styles.leftCell}>HRA</Text>
                <Text style={styles.rightCell}>{pay.HRA && pay.HRA}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.leftCell}>Conveyance</Text>
                <Text style={styles.rightCell}>
                  {pay.conveyance && pay.conveyance}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.leftCell}>Medical</Text>
                <Text style={styles.rightCell}>
                  {pay.medical && pay.medical}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.leftCell}>Special</Text>
                <Text style={styles.rightCell}>
                  {pay.special && pay.special}
                </Text>
              </View>

              <View style={styles.row}>
                <View style={styles.leftCell}>
                  <Text style={styles.red}> PF</Text>
                </View>
                <View style={styles.rightCell}>
                  <Text style={styles.red}>
                    -{pay.deductions && pay.deductions}
                  </Text>
                </View>
              </View>
              <View style={styles.result}>
                <View style={styles.row}>
                  <Text style={styles.leftCell}>Net Total:</Text>
                  <Text style={styles.rightCell}>{pay.NetAmount}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* </View> */}
      </Page>
    </Document>
  );
};

export default PdfMaker;

// import React from "react";
// import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// const styles = StyleSheet.create({
//   main: {
//     width: 500,
//     display:"flex",
//     justifyContent:"center",
//     alignItems:"center",

//   },

//   page: {
//     flexDirection: "column",
//     backgroundColor: "#fff",
//     width: "100%",
//     // display: 'flex',
//     // justifyContent:"center",

//     // flexDirection:"row",
//   },

//   page_header: {
//     color: "green",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   page_container: {
//     width: "90%",
//     // borderWidth: 4,
//     // borderColor: "blue",
//   },
//   flexContainer: {
//     display: "flex",
//     flexDirection: "row",
//     gap: 10,
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
//   title: {
//     fontSize: 40,
//     fontWeight: "bold",
//   },
//   customText: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   row: {
//     width: "100%",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     // marginHorizontal: 50,
//     marginTop:10,
//     marginBottom:10,
//   },
//   leftCell: {
//     flex: 1,
//     fontWeight: "bold",
//   },
//   rightCell: {
//     flex: 1,
//     textAlign: "right",
//   },
//   salleryContainer: {
//     width: "80%",
//     display: "flex",
//     flexDirection: "column",
//   },
//   red: {
//     color: "red",
//   },
//   result: {
//     // borderWidth: 2,
//     borderColor: "black",
//     // width: '100%',
//     borderTopWidth: 2,
//     borderBottomWidth: 2,
//     // color: "red",
//   },
// });

// const PdfMaker = ({ selectedEmployee }) => {
//   return (
//     <Document style={styles.main}>
//       <Page size='A4' style={styles.page}>
//         {/*  */}
//         <Text style={styles.title}>Employee Details</Text>
//         <View style={styles.page_header}>
//           <Text>{selectedEmployee.EmployeeId}</Text>
//         </View>
//         <View style={styles.page_container}>
//           <View></View>
//           <View style={styles.flexContainer}>
//             <Text> Full Name : </Text>{" "}
//             <Text>
//               {" "}
//               {selectedEmployee.firstName} {selectedEmployee.lastName}{" "}
//             </Text>
//           </View>

//           <View style={styles.flexContainer}>
//             <View style={styles.flexContainer}>
//               <Text>Department: </Text>
//               <Text>{selectedEmployee.department}</Text>
//             </View>
//             <View style={styles.flexContainer}>
//               <Text>Designation: </Text>
//               <Text> {selectedEmployee.designation}</Text>
//             </View>
//           </View>

//           <View style={styles.flexContainer}>
//             <View style={styles.flexContainer}>
//               <Text>Email : </Text>
//               <Text>{selectedEmployee.email}</Text>
//             </View>
//             <View style={styles.flexContainer}>
//               <Text>Gender : </Text>
//               <Text>{selectedEmployee.gender}</Text>
//             </View>
//           </View>

//           {/*  */}
//           <Text style={styles.title}>Joining Details</Text>

//           <View style={styles.flexContainer}>
//             <View style={styles.flexContainer}>
//               <Text>Date </Text>
//               <Text>{selectedEmployee.dateOfJoining}</Text>
//             </View>
//             <View style={styles.flexContainer}>
//               <Text>Year : </Text> <Text>{selectedEmployee.Year} </Text>
//             </View>
//             <View style={styles.flexContainer}>
//               <Text>Month : </Text>
//               <Text> {selectedEmployee.Month}</Text>
//             </View>
//             <View style={styles.flexContainer}>
//               <Text>Type : </Text>
//               <Text>{selectedEmployee.Type}</Text>
//             </View>
//           </View>

//           {/* <View style={styles.flexContainer}>
//             <Text>Date of Joining </Text>
//             <Text>{selectedEmployee.dateOfJoining}</Text>
//           </View> */}
//           <View style={styles.flexContainer}>
//             <Text>UAN </Text>
//             <Text>{selectedEmployee.uan}</Text>
//           </View>
//         </View>

//         {/*  */}
//         <View style={styles.salleryContainer}>
//           <View style={styles.row}>
//             <Text style={styles.leftCell}>Basic Salary </Text>
//             <Text style={styles.rightCell}>$10.00</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.leftCell}>HRA</Text>
//             <Text style={styles.rightCell}>$15.00</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.leftCell}>Conveyance</Text>
//             <Text style={styles.rightCell}>$20.00</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.leftCell}>Medical</Text>
//             <Text style={styles.rightCell}>$20.00</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.leftCell}>Special</Text>
//             <Text style={styles.rightCell}>$20.00</Text>
//           </View>

//           <View style={styles.row}>
//             <View style={styles.leftCell}>
//               <Text style={styles.red}> PF</Text>
//             </View>
//             <View style={styles.rightCell}>
//               <Text style={styles.red}>-$20.00</Text>
//             </View>
//           </View>
//           <View style={styles.result}>
//             <View style={styles.row}>
//               <Text style={styles.leftCell}>Net Total:</Text>
//               <Text style={styles.rightCell}>$45.00</Text>
//             </View>
//           </View>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// export default PdfMaker;

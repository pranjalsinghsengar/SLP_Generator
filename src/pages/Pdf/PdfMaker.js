import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  customText: {
    fontSize: 14,
    marginBottom: 5,
  },
});

const PdfMaker = ({selectedEmployee}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>
          {selectedEmployee.EmployeeId}
          </Text>
          <Text style={styles.customText}>You can add more custom elements here.</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfMaker;

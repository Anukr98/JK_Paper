import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

export const RetailerInfo = () => {
  return (
    <ScrollView style={styles.paddingTop}>
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.width50}>
            <Text style={styles.grey}>GSTIN</Text>
            <Text>GSTIN-ABCD123</Text>
          </View>
          <View style={styles.width50}>
            <Text style={styles.grey}>Mobile No.</Text>
            <Text>9389399839</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.grey}>Billing Street</Text>
            <Text>MG Marg , 9th floor , lic building</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.width20}>
            <Text style={styles.grey}>State</Text>
            <Text>Delhi</Text>
          </View>
          <View style={styles.width30}>
            <Text style={styles.grey}>City</Text>
            <Text>New Delhi</Text>
          </View>
          <View style={styles.width25}>
            <Text style={styles.grey}>Country</Text>
            <Text>India</Text>
          </View>
          <View style={styles.width25}>
            <Text style={styles.grey}>Postal Code</Text>
            <Text>873837</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.width35}>
            <Text style={styles.grey}>Associated Date</Text>
            <Text>26/07/2020</Text>
          </View>
          <View style={styles.width33}>
            <Text style={styles.grey}>Last Visit Date</Text>
            <Text>26/07/2020</Text>
          </View>
          <View style={styles.width33}>
            <Text style={styles.grey}>Last Order Date</Text>
            <Text>26/07/2020</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.width50}>
            <Text style={styles.grey}>Owner Name</Text>
            <Text>None</Text>
          </View>
          <View style={styles.width50}>
            <Text style={styles.grey}>Owner Phone No.</Text>
            <Text>None</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  card: {backgroundColor: 'white', paddingHorizontal: '8%'},
  grey: {color: 'grey'},
  width50: {width: '50%'},
  width25: {width: '25%'},
  width20: {width: '20%'},
  width30: {width: '30%'},
  width33: {width: '33%'},
  width35: {width: '35%'},
  paddingTop: {paddingTop: 24},
});

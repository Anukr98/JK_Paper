import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import { Header } from '../../reusableComponents/Header'
import { colors } from '../../Utilities/colors'

export const AddNewRetailer = () => {
    return (
      <View style={{flex: 1}}>
        <Header title="Add New Retailer" />
        <ScrollView style={styles.view1}>
          <Text style={styles.text2}>Create New Retailer Profile</Text>
          <Text style={styles.view2}>
            You are creating new retailer profile by adding retailer's info.
          </Text>
  
          <TextInput
            theme={{colors: {primary: 'grey'}}}
            style={styles.input}
            mode="outlined"
            label="Name"
          />
          <TextInput
            keyboardType="phone-pad"
            theme={{colors: {primary: 'grey'}}}
            style={styles.input}
            mode="outlined"
            label="Mobile Number"
          />
          <TextInput
            theme={{colors: {primary: 'grey'}}}
            style={styles.input}
            mode="outlined"
            label="Area"
          />
          <TextInput
            theme={{colors: {primary: 'grey'}}}
            style={styles.input}
            mode="outlined"
            label="Email"
          />
          <TextInput
            theme={{colors: {primary: 'grey'}}}
            style={styles.input}
            mode="outlined"
            label="Address"
          />
          <TextInput
            theme={{colors: {primary: 'grey'}}}
            style={styles.input}
            mode="outlined"
            label="City"
          />
          <TextInput
            theme={{colors: {primary: 'grey'}}}
            style={styles.input}
            mode="outlined"
            label="State"
          />
  
          <TextInput
            theme={{colors: {primary: 'grey'}}}
            style={styles.input}
            mode="outlined"
            label="Postal Code"
          />
          <TextInput
            theme={{colors: {primary: 'grey'}}}
            style={styles.input}
            mode="outlined"
            label="GSTIN"
          />
          <TextInput
            theme={{colors: {primary: 'grey'}}}
            style={styles.input}
            mode="outlined"
            label="Potential Value"
          />
          <TextInput
            theme={{colors: {primary: 'grey'}}}
            style={styles.input}
            mode="outlined"
            label="Owner Name"
          />
          <TextInput
            theme={{colors: {primary: 'grey'}}}
            style={styles.input}
            mode="outlined"
            label="Category"
          />
          <TextInput
            theme={{colors: {primary: 'grey'}}}
            style={styles.input}
            mode="outlined"
            label="Competition"
          />
          <TextInput
            theme={{colors: {primary: 'grey'}}}
            style={styles.input}
            mode="outlined"
            label="Dealer"
          />
          <Button
            mode="contained"
            style={{marginTop: 5}}
            theme={{colors: {primary: colors.blue}}}>
            Submit
          </Button>
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    view1: {paddingHorizontal: '6%', marginVertical: 20},
    text2: {fontWeight: 'bold', fontSize: 22, color: 'grey'},
    view2: {color: 'grey'},
    input: {marginVertical: 10},
  });
  
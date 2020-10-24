import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from "../../../Utilities/colors";

export const Header = () => {
  return (
    <View>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Text style={styles.text1}>Date</Text>
          <Text style={styles.text1}>Month</Text>
          <Text style={styles.text1}>Week</Text>
        </View>
        <View style={styles.view3}>
          <Button style={styles.button} rounded>
            <Text style={styles.text2}>September</Text>
          </Button>
        </View>
      </View>
      <View style={styles.view4}>
        <Text style={{color: colors.blue}}>Select PSM</Text>
        <MaterialCommunityIcons
          color={colors.blue}
          size={20}
          name="chevron-down"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  view2: {
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text1: {fontWeight: 'bold', color: 'lightgrey', fontSize: 16},
  view3: {width: '45%'},
  view4: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  text2: {color: 'white', fontWeight: 'bold', fontSize: 16},
});

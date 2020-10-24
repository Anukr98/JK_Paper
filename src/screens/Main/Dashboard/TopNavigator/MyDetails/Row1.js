import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import { sharedStyles } from './styles'
import { colors } from '../../../../../Utilities/colors'

export const Row1 = () => {
    const { colors : theme} = useTheme()

    return (
        <View style={sharedStyles.row}>
          <View style={styles.col}>
            <Text style={styles.text1}>ORDER VALUE</Text>
            <View style={styles.view1}>
              <View style={styles.slider1} />
              <View style={styles.slider2} />
              <View style={styles.view2}>
                <Text style={styles.text3}>8000</Text>
                <Text style={styles.text4}>{'TARGET     '}</Text>
              </View>
              <View style={styles.view3}>
                <Text style={styles.text5}>3000</Text>
                <Text style={styles.text6}>ACHIEVED</Text>
              </View>
              <View style={styles.view5}>
                <Text style={styles.text1}>SEPTEMBER</Text>
              </View>
            </View>
          </View>
          <View style={styles.col}>
            <Text style={styles.text7}>NEW COUNTERS</Text>
            <View style={styles.view1}>
              <AnimatedCircularProgress
                style={styles.marginTop}
                size={70}
                width={8}
                fill={100}
                tintColor={colors.blue}
                arcSweepAngle={180}
                rotation={-90}
                backgroundColor={theme.background}>
                {() => (
                  <AnimatedCircularProgress
                    size={40}
                    width={8}
                    fill={45}
                    tintColor={colors.skyblue}
                    arcSweepAngle={180}
                    rotation={-90}
                    backgroundColor={theme.background}
                  />
                )}
              </AnimatedCircularProgress>
              <View style={styles.view6}>
                <Text style={styles.text3}>8000</Text>
                <Text style={styles.text4}>{'TARGET     '}</Text>
              </View>
              <View style={styles.view3}>
                <Text style={styles.text5}>3000</Text>
                <Text style={styles.text6}>ACHIEVED</Text>
              </View>
              <View style={styles.view5}>
                <Text style={styles.text1}>SEPTEMBER</Text>
              </View>
            </View>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
  col: {
    paddingHorizontal: 6,
    paddingVertical: 10,
    elevation: 2,
    backgroundColor: 'white',
    width: '48%',
    borderRadius: 5,
  },
  row1: {color: 'grey', fontWeight: 'bold', fontSize: 12},
  view1: {paddingHorizontal: 4, paddingVertical: 6},
  slider1: {
    marginTop: 14,
    width: '80%',
    marginVertical: 4,
    backgroundColor: colors.blue,
    height: 10,
    borderRadius: 4,
  },
  slider2: {
    width: '60%',
    marginVertical: 4,
    backgroundColor: colors.skyblue,
    height: 10,
    borderRadius: 4,
  },
  view2: {
    marginTop: 14,
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 1,
  },
  text3: {fontWeight: 'bold', color: colors.blue, fontSize: 16},
  text4: {fontSize: 12, color: 'grey'},
  view3: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 1,
  },
  text5: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: colors.skyblue,
    fontSize: 16,
  },
  text6: {fontSize: 12, color: 'grey'},
  view5: {paddingTop: 20},
  text1: {fontWeight: '300'},
  text7: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 12,
  },
  marginTop: {marginTop: 10},
  view6: {
    marginTop: -20,
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 1,
  },
});

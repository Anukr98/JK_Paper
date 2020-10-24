import {StyleSheet} from 'react-native';
import { colors } from '../../../../../Utilities/colors'

export const sharedStyles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  view5: {paddingTop: 20},
  text1: {fontWeight: '300'},
  text5: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: colors.skyblue,
    fontSize: 16,
  },
});

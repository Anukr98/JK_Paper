import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../Utilities/colors'

export const AddRetailerFAB = () => {
    const navigation = useNavigation();
    return (
      <Pressable
        style={styles.fab}
        onPress={() => navigation.navigate('AddNewRetailer')}>
        <MaterialCommunityIcons size={42} color="white" name="plus" />
      </Pressable>
    );
};

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      right: 12,
      bottom: 24,
      backgroundColor: colors.blue,
      height: 55,
      width: 55,
      borderRadius: 55 / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  